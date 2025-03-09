import { randomUUID } from "crypto";

export default defineEventHandler(async (event) => {
  const { name, type, description } = await readBody(event);
  const user = await getUserSession(event);
  return await prisma.device.create({
    data: {
      name,
      description,
      type,
      token: randomUUID(),
      userId: user.id,
    },
  });
});
