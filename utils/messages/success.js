exports.success = (res, content, status = 200) => {
    res.status(status).json(content);
};
