import  Jwt  from "jsonwebtoken"
import {} from "dotenv/config"
import CustomError from "../error/CustomError.js"
import bad_req from "../error/bad-req.js"


const login = async (req, res, next)=>{

    try {
        const {username, password} = req.body
        const id = new Date().getMinutes()

        if(!username || !password)
        {
            throw new bad_req("username or password error")
            
        }    
        const token = Jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "30d"})
        
        res.send({
            msg: "User Created",
            token
        })

    } catch (error) {

        next(error)
    
    }
}



const dashboard = async (req, res, next)=>{

    const numluck = Math.floor(Math.random()*100)
    
    res.status(200).json({
        msg:`hello, ${req.user.username}`,
        secret:`your number is ${numluck}`
    })
}

export{
    login,
    dashboard
}