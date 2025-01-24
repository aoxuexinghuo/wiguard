import jwt from "jsonwebtoken";

const authRequiredRoutes = ["/api/devices"];

export default defineEventHandler(async (event) => {
  if (!authRequiredRoutes.includes(event.path)) {
    return;
  }
  try {
    const { token } = await readBody(event);
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    event.context.user = user;
  } catch (e) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }
});
