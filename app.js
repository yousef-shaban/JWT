import express from "express"
import errorHandlerMiddleware from "./middleware/error-handling.js"
import notFound from "./middleware/not-found.js"
import {Router} from "./Routers/router.js"
const app = express()
const PORT = 3000

// middleware 
app.use(express.json())
app.use(express.static("./view"))

// router middleware
app.use("/api/v1", Router)

// error handling middleware
app.use(errorHandlerMiddleware)


// handling the not found url's
app.use(notFound)

const start = async ()=>{
    try {
        app.listen(PORT, () => {
            console.log("server is working on port 3000");
        });
    } catch (error) {
        console.log(error)
    }
}
start()