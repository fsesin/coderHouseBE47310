export const errorMiddleware = (error, req, res, next) => {
  res.send({ status: "Error", message: error.message, error: error.name });
};
