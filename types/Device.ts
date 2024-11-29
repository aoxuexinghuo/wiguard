import { Types } from 'mongoose';

export interface Device {
    owner: Types.ObjectId; // 表示设备的拥有者是一个 MongoDB 的 ObjectId
}

