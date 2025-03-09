export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const user = await getUserSession(event);
  if (!id || !user.user?.id) {
    throw createError({ statusCode: 400, message: "Invalid device ID" });
  }
  const device = await prisma.device.findUnique({
    where: { id: parseInt(id), userId: user.user?.id },
  });
  if (!device) {
    throw createError({ statusCode: 404, message: "Device not found" });
  }
  return device;
});
