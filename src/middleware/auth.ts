import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, process.env.TOKEN_SECRET!, (err, decoded) => {
      if (err) {
        throw { ...new Error("Forbidden"), status: 403, stack: err.stack };
      }
      req.user = decoded;
    });
    next();
  } else {
    throw { ...new Error("Unathorized"), status: 401 };
  }
};
