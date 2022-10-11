const errorHandler = (err, req, res, next) => {
    res.json({ err });
};

module.exports = errorHandler;