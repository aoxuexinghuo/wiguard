export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.username || !body.password) {
    throw createError({
      statusCode: 400,
      message: "Username and password are required",
    });
  }
  const { username, password } = body;

  const user = await prisma.user.create({
    data: {
      username,
      password: await hashPassword(password),
    },
  });

  return { id: user.id, username: user.username };
});
