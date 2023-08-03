import { Request, Response } from "express";
import User from "../models/users";
import _ from "../types/namespace";

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
  try {
    await user.save();
    res.sendStatus(201);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const patchUser = async (req: Request, res: Response) => {
  const { username, email } = req.body;
  username && (req.user.username = username);
  email & (req.user.email = email);

  try {
    const updatedUser = await req.user.save();
    res.json(updatedUser);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await req.user!.remove();
  } catch (err: any) {
    res.status!(500).json({ message: err.message });
  }
};

export default { getUser, addUser, deleteUser, patchUser, updateUser };
