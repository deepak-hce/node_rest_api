const httpStatus = require('http-status');

class ErrorResponse {
    constructor(Comment, Status = httpStatus.INTERNAL_SERVER_ERROR, Result = null, ResponseCode = 1) {
        this.ResponseCode = ResponseCode;
        this.Status = Status;
        this.Comment = Comment;
        this.Result = Result;
    }
}

module.exports = ErrorResponse;
