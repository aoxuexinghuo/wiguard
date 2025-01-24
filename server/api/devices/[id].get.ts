import { DeviceModel } from "~/server/models";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const user = event.context.user;
  return DeviceModel.findOne({ _id: id, owner: user.id });
});
