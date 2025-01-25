import { UserModel } from "~/server/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const user = await UserModel.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createError({
      statusCode: 401,
      message: "Invalid username or password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  setCookie(event, "token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return { _id: user._id, username: user.username };
});
