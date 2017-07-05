module.exports = {
  debugMiddleware: function(req, res, next) {
    console.log(req.url);
    console.log(req.query);
    next();
  }
};
