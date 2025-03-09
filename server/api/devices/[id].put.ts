export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const user = await getUserSession(event);
  const body = await readBody(event);
  if (!id || !user.user?.id) {
    throw createError({ statusCode: 400, message: "Invalid device ID" });
  }
  return await prisma.device.update({
    where: { id: parseInt(id), userId: user.user?.id },
    data: {
      name: body.name,
      type: body.type,
      description: body.description,
    },
  });
});
