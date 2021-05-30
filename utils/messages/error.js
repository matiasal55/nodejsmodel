exports.error = (res, message, status = 400) => {
    res.status(status).json({ message });
};
