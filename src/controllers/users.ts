import { Request, Response } from "express";
import User from "../models/users";
import _ from "../types/namespace";
import jwt from "jsonwebtoken";
import { tryCatchController } from "../utils/tryCatchController";
import { HttpError } from "../utils/HttpError";

const authenticateUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password);
  const result = await User.find({ username, password });
  if (result.length) {
    const token = jwt.sign(username, process.env.TOKEN_SECRET!);
    res.json({ accessToken: token });
  } else {
    throw new HttpError("Invalid Credentials", 401);
  }
};

const getUser = async (req: Request, res: Response) => {
  const { user } = req as any;
  res.json({ user });
};

const addUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password,
  });

  await user.save();
  res.sendStatus(201);
};

const patchUser = async (req: Request, res: Response) => {
  const { username, email } = req.body;
  username && (req.user.username = username);
  email & (req.user.email = email);

  const updatedUser = await req.user.save();
  res.json(updatedUser);
};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await req.user!.remove();
  } catch (err: any) {
    res.status!(500).json({ message: err.message });
  }
};

export const usersController = tryCatchController({
  getUser,
  addUser,
  deleteUser,
  patchUser,
  updateUser,
  authenticateUser,
});
