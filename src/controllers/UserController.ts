import { Request, Response } from "express";
import User from "../models/UserModel.js";
import { Op } from "sequelize";
import bigPromise from "../utils/bigPromise.js";
import HttpError from "../utils/HttpError.js";

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await User.findAll();
  res.status(200).json({ users });
};

export const createNewUser = bigPromise(async (req: Request, res: Response) => {
  const { name, email, username, role } = req.body;
  const userExist = await User.findOne({
    where: { [Op.or]: [{ name }, { username }] },
  });
  if (userExist) {
    throw new HttpError(400, "User Already Exists");
  }
  const user = await User.create({ name, username, email, role });
  res.status(201).json({ user });
});
