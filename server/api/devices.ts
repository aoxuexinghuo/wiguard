import { DeviceModel } from '../models';  // 引入 DeviceModel
import jwt, { JwtPayload } from 'jsonwebtoken';  // 引入 jsonwebtoken 用于验证 token
import { defineEventHandler, getHeader, createError } from 'h3';  // 引入 H3 工具

interface CustomJwtPayload extends JwtPayload {
    userId: string;  // 假设 JWT 中包含 userId 字段
}

export default defineEventHandler(async (event) => {
    // 获取 Authorization header 中的 token
    const authHeader = getHeader(event, 'Authorization');
    if (!authHeader) {
        throw createError({
            statusCode: 401,
            message: 'Authorization header is missing',
        });
    }

    const token = authHeader.replace('Bearer ', '');  // 从 Bearer token 中提取出 token 部分

    // 验证 JWT token
    let decoded: JwtPayload | CustomJwtPayload;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload | CustomJwtPayload;
    } catch (error) {
        throw createError({
            statusCode: 401,
            message: 'Invalid or expired token',
        });
    }

    // 使用类型保护来确保 decoded 是 CustomJwtPayload 类型，并且包含 userId 字段
    if ('userId' in decoded) {
        const userId = decoded.userId;

        // 获取当前用户的所有设备
        const devices = await DeviceModel.find({ owner: userId }).populate('owner');

        return { devices };
    } else {
        throw createError({
            statusCode: 401,
            message: 'Invalid token payload',
        });
    }
});
