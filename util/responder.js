const responder = (res, data, message, success = true) => {
  return res.json({
    success: success,
    message: message,
    data: data,
  });
};

module.exports=responder;
