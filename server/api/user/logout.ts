export default defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  setCookie(event, "token", "", { maxAge: 0 });
  return { message: "Logged out" };
});
