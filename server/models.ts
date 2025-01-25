import { model, Schema } from "mongoose";
import mongoose from "mongoose";
import { Device, User } from "~/shared/types";

mongoose.connect(process.env.MONGODB_URI!);

const deviceSchema = new Schema<Device>({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  apikey: { type: String, required: true },
});

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export const DeviceModel = model<Device>("Device", deviceSchema);
export const UserModel = model<User>("User", userSchema);
