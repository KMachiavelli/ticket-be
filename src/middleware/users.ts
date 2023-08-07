import { NextFunction } from "express";
import { Request, Response } from "express";
import User from "../models/users";

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  let user;

  user = await User.findById(id);
  if (user === null) {
    throw {
      ...new Error("Not found"),
      message: "Cannot find user",
      status: 404,
    };
  }

  req.user = user;
  next();
};
