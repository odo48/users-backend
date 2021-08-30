const moment = require("moment");

const logger = (res, req, next) => {
  console.log(
    `${req.req.protocol}://${req.req.get("host")}${
      req.req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
