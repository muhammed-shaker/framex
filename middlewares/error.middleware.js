function errorMiddleware(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal server error';

  if (!err.isOperational) console.error(err); // log unexpected errors

  res.status(statusCode).json({
    success: false,
    message,
    ...(err.details && { details: err.details }),
  });
}

module.exports = errorMiddleware;