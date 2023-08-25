import express from "express";
import adminIndexRouter from "./admin/admin-index.js";
import apiIndexRouter from "./api/api-index.js";

const router = express.Router();

router.use("/admin", adminIndexRouter);
router.use("/api", apiIndexRouter);

router.get("/", (_req, res) => {
    res.render("index");
});

export default router;
