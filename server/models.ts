import { model, Schema} from 'mongoose';
import type { Device } from '../types/Device';
import type { User } from '../types/User';

// 定义 Device 模式
const deviceSchema = new Schema<Device>({
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },  // 引用 User 模型
});

// 创建 Device 模型
const DeviceModel = model<Device>("Device", deviceSchema);

export { DeviceModel };

// 定义 User 模式
const userSchema = new Schema<User>({
    username: { type: String, required: true },  // 用户名字段，必填
    password: { type: String, required: true },  // 密码字段，必填
});

// 创建 User 模型
const UserModel = model<User>("User", userSchema);

export { UserModel };
