const logger = (req, res, next) => {
  const now = new Date();
  console.log("A new request is comming at: ", now);
  next();
};

module.exports = logger;
