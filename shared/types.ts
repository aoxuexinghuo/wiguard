import { Types } from "mongoose";

export interface User {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

export interface Device {
  _id: Types.ObjectId;
  name: string;
  description: string;
  owner: Types.ObjectId;
  apikey: string;
}

export interface DeviceEvent {
  _id: Types.ObjectId;
  device: Types.ObjectId;
  topic: string;
  message: string;
  timestamp: number;
}
