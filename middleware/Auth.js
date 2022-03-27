import Jwt from "jsonwebtoken";
import CustomError from "../error/CustomError.js";
import unauthorized from "../error/unauthorized.js"

const AuthMiddleware = (req, res, next)=>
{
    try {
        const Auth = req.headers.authorization;
        
        if(!Auth || !Auth.startsWith("Bearer "))
        {
            throw new unauthorized("No Token Valide");
        }
    
        const token = Auth.split(" ")[1]
        const decoded = Jwt.verify(token, process.env.JWT_SECRET)
        
        const {username, id} = decoded
        req.user = {username, id}
        next()

    } catch (error) {
        next(error)
        // next(new CustomError("UnAuthorized", 501))
    }
}

export default AuthMiddleware