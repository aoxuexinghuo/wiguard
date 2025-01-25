import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET!);
      event.context.user = user;
    } catch (e: any) {
      throw createError({
        statusCode: 401,
        message: e.message ?? "Unauthorized",
      });
    }
  }
});
