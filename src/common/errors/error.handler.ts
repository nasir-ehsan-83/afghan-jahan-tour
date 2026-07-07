import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "./app.error.js";

export const errorHandler = (
  err: Error | AppError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    const formattedErrors = err.format();
    
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: formattedErrors,
    });
  }

  console.error("Error:", err.message);
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};