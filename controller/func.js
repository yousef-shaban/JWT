const login = async (req, res, next)=>{
    
    try {
        const {username, password} = req.body

        if(!username || !password)
        {
            throw new Error("username or password is not provided")
        }
        console.log(username, password);
        res.send("fake login/register/signup route")

    } catch (error) {

        next("username or password is not provided");
    
    }
}

const dashboard = async (req, res, next)=>{
    const numluck = Math.floor(Math.random()*100)
    res.status(200).json({
        msg:"hello, yousef shaban",
        secret:`your number is ${numluck}`
    })
}

export{
    login,
    dashboard
}