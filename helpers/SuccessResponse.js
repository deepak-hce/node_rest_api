const httpStatus = require("http-status")
class SuccessResponse {
    constructor(Comment, Result = null, ResponseCode = 1, Status = httpStatus.OK) {
        this.ResponseCode = ResponseCode;
        this.Status = Status;
        this.Comment = Comment;
        this.Result = Result;
    }
}


module.exports = SuccessResponse;



