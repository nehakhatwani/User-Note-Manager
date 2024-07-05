const errors={
    VALIDATION_ERROR:400,      //backend's syntax is not fulfilled
    UNAUTHORIZED:401,         //when a page wants u to login but u did not came after logging in
    FORBIDDEN:403,            //when u r not even allowed to come
    NOT_FOUND:404,           //Page ya url not found
    SERVER_ERROR:500,        //server error down, no db connection
}
const errorHandler=(err,req,res,next) => {      //middleware se passed err
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
            });
            break;
        case errors.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
            });
            break;
        case errors.FORBIDDEN:
            res.json({
                title: "forbidden",
                message: err.message,
            });
            break;
        case errors.SERVER_ERROR:
            res.json({
                title: "Server failed",
                message: err.message,
            });
            break;
        case errors.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
            });
        default:
            break;
    };
}
module.exports = errorHandler;