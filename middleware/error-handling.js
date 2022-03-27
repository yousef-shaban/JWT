import CustomError from "../error/CustomError.js";

const mainErrorHandling = (err, req, res, next) => {

	if(err instanceof CustomError)
	{
		return res.status(err.StatusCode).json({msg: err.message})
	}else{

		return res.status(500).json({msg: "Something Went Wrong!!!"})
	}

};

export default mainErrorHandling