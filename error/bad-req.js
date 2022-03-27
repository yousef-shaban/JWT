import CustomError from "./CustomError.js"
class bad_req extends CustomError
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 400
    }

}

export default bad_req;