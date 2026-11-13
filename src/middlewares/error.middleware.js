import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  // If it's not one of our own ApiErrors, treat it as an unexpected server error
  const statusCode = err instanceof ApiError ? err.statusCode : 500;
  const message =
    err instanceof ApiError ? err.message : "Internal Server Error";

  if (!(err instanceof ApiError)) {
    console.error(err); // log the real error for yourself, but don't send it to the client
  }

  return res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    errors: err.errors || [],
  });
};

export { errorHandler };
