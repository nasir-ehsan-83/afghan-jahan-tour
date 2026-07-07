import { AppError } from "./app.error.js";

export const notFound = (resource: string = 'Resource') => {
  return new AppError(`${resource} not found`, 404);
};

export const badRequest = (message: string) => {
  return new AppError(message, 400);
};

export const unauthorized = (message: string = 'Unauthorized') => {
  return new AppError(message, 401);
};

export const forbidden = (message: string = 'Forbidden') => {
  return new AppError(message, 403);
};

export const conflict = (message: string) => {
  return new AppError(message, 409);
};