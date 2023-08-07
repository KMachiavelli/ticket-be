import jwt from "jsonwebtoken";

export const generateAccessToken = (username: string) => {
  return jwt.sign(username, process.env.TOKEN_SECRET!, { expiresIn: "3600s" });
};
