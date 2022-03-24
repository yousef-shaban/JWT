import express from "express";
import {login, dashboard} from "../controller/func.js"
const Router = express.Router()



Router.get("/dashboard", dashboard);
Router.post("/login", login)

export {
    Router
}
