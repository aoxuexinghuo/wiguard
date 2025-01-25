import { DeviceModel } from "~/server/models";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const user = event.context.user;
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  return await DeviceModel.deleteOne({ _id: id, owner: user.id });
});
