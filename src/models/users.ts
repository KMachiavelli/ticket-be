import mongoose from "mongoose";
import { User } from "../types/user";

const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  tickets: [String],
  wishList: [String],
});

export default mongoose.model("User", userSchema);
