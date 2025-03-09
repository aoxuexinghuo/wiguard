export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event);
  return await prisma.device.findMany({
    where: { userId: user?.id },
  });
});
