/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

interface ErrorResponse {
  status: number;
  message: string;
}

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  __next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof Error) {
    message = err.message;
  }

  if (err.status && typeof err.status === "number") {
    statusCode = err.status;
  }

  const error: ErrorResponse = {
    status: statusCode,
    message: message,
  };

  res.status(statusCode).json({ error });
};

export default errorHandler;
