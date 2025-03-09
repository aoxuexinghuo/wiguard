export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || !(await verifyPassword(password, user.password))) {
    throw createError({
      statusCode: 401,
      message: "Invalid username or password",
    });
  }

  setUserSession(event, { user: { id: user.id, username: user.username } });

  return { id: user.id, username: user.username };
});

declare module "#auth-utils" {
  interface User {
    id: number;
    username: string;
  }
}
