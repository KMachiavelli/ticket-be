import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error & { status: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  const status = error.status || 400;
  res.status(status).json({
    error: error.message,
    status: error.status,
    stack: process.env.NODE_ENV === "development" ? error.stack : {},
  });
};
