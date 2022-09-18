const errorHandler = (err, req, res, next) => {
    res.send(err.toString());
};

module.exports = errorHandler;