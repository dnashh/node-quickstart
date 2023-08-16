import express from "express";
import apiIndexRouter from "./api/api-index.js";

const router = express.Router();

router.use("/api", apiIndexRouter);

router.get("/", (_req, res) => {
    res.render("index");
});

export default router;
