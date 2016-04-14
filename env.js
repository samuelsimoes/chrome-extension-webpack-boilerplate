// tiny wrapper with default env vars
module.exports = {
  mode: (process.env.ENV || "development"),
  port: (process.env.PORT || 3000)
};
