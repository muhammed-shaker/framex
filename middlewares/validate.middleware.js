const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({ body: req.body, params: req.params, query: req.query });
    next();
  } catch (err) {
    err.statusCode = 400;
    err.isValidationError = true;
    next(err);
  }
};

module.exports = validate;