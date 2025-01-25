import { DeviceModel } from "~/server/models";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const user = event.context.user;
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  const device = await DeviceModel.findOne({ _id: id, owner: user.id });
  if (!device) {
    throw createError({ statusCode: 404, message: "Device not found" });
  }
  return device;
});
