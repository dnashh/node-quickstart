import { Request, Response, NextFunction } from "express";

interface ErrorResponse {
  status: number;
  message: string;
}

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof Error) {
    message = err.message;
  }

  if (err.status && typeof err.status === "number") {
    statusCode = err.status;
  }

  const errorResponse: ErrorResponse = {
    status: statusCode,
    message: message,
  };

  res.status(statusCode).json(errorResponse);
};

export default errorHandler;
