import { UserModel } from "~/server/models";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.username || !body.password) {
    throw createError({
      statusCode: 400,
      message: "Username and password are required",
    });
  }
  const { username, password } = body;

  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    throw createError({
      statusCode: 400,
      message: "Username already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username,
    password: hashedPassword,
  });
  await newUser.save();
  return { message: "User registered successfully" };
});
