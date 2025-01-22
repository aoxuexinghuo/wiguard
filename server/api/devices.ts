import { DeviceModel } from "~/server/models";

export default defineEventHandler(async (event) => {
  const user = event.context.user;
  return DeviceModel.find({ owner: user.id });
});
