import { UserModel } from "~/server/models";

export default defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  return await UserModel.findById(user.id, { password: 0 });
});
