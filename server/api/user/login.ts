import { UserModel } from '~/server/models';  // 引入 UserModel
import bcrypt from 'bcryptjs';  // 引入 bcrypt 用于密码比对
import jwt from 'jsonwebtoken';  // 引入 jsonwebtoken 用于生成 token
import { defineEventHandler, readBody, createError } from 'h3';  // 引入 H3 工具

export default defineEventHandler(async (event) => {
    // 读取请求体中的用户名和密码
    const body = await readBody(event);
    const { username, password } = body;

    // 查找用户
    const user = await UserModel.findOne({ username });

    // 用户不存在或密码不匹配
    if (!user || !await bcrypt.compare(password, user.password)) {
        throw createError({
            statusCode: 401,
            message: 'Invalid username or password',
        });
    }

    // 生成 JWT token
    const token = jwt.sign({ username: user.username, userId: user._id }, process.env.JWT_SECRET!, {
        expiresIn: '1h',  // 设置过期时间为1小时
    });

    return { token };
});
