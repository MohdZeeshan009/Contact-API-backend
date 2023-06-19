const { constants } = require("../constants");
exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        tittle: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        tittle: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        tittle: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_NOT_FOUND:
      res.json({
        tittle: "Server not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;


    default:
        console.log("No error everything is good");
      break;
  }
};
