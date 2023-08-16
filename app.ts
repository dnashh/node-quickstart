import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import router from "./src/routes/indexRouter.js";
import errorHandler from "./src/utils/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("src/static"));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("tiny"));

app.use(router);

app.use(errorHandler);

export default app;
