import { DeviceModel } from "~/server/models";
import { randomUUID } from "crypto";

export default defineEventHandler(async (event) => {
  const { name, description } = await readBody(event);
  const user = event.context.user;
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  return await DeviceModel.create({
    owner: user.id,
    name,
    description,
    apikey: randomUUID(),
  });
});
