import jwt from "jsonwebtoken";

const authRequiredRoutes = ["/api/devices"];

export default defineEventHandler((event) => {
  if (!authRequiredRoutes.includes(event.path)) {
    return;
  }

  const token = getCookie(event, "token");
  if (!token) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    event.context.user = user;
  } catch (e) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
});
