export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const user = await getUserSession(event);
  if (!id || !user.user?.id) {
    throw createError({ statusCode: 400, message: "Invalid device ID" });
  }
  return await prisma.device.delete({
    where: { id: parseInt(id), userId: user.user?.id },
  });
});
