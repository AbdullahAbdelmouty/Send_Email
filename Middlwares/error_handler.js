const Error_Handler = (err, req, res, next) => {
    const customeError = {
        status: err.status || 500,
        message: err.message || "Something went wrong"
    };

    if(err.name === "ValidationError") {
        customeError.message = Object.values(err.errors).map((item) => item.message).join(", ");
    }

    if(err.name === "CastError") {
        customeError.message = "Please provide a valid id";
    }

    if(err.code === 11000) {
        customeError.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
    }

    if(err.name === "JsonWebTokenError") {
        customeError.message = "Please authenticate";
    }

    if(err.name === "TokenExpiredError") {
        customeError.message = "Token expired, please login again";
    }

    res.status(customeError.status).json(customeError);
}

module.exports = Error_Handler;