import express from "express";
import {login, dashboard} from "../controller/func.js"
import AuthMiddleware from "../middleware/Auth.js";

const Router = express.Router()



Router.get("/dashboard", AuthMiddleware, dashboard);
Router.post("/login", login)

export {
    Router
}
