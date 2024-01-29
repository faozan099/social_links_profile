function responseSuccess(statusCode, data, message, res) {
  res.status(statusCode).json({
    payload: data,
    message,
  });
}
function responseFailed(statusCode, message, res) {
  res.status(statusCode).json({
    message,
  });
}

module.exports = {
    responseFailed,
    responseSuccess
}
