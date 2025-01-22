import { Types } from "mongoose";

export interface Device {
  owner: Types.ObjectId;
}

export interface User {
  username: string;
  password: string;
}
