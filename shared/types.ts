import { Types } from "mongoose";

export interface User {
  username: string;
  password: string;
}

export interface Device {
  owner: Types.ObjectId;
  apikey: string;
}

export interface DeviceEvent {
  device: Types.ObjectId;
  topic: string;
  message: string;
  timestamp: number;
}
