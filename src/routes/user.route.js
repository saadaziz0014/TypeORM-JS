const express = require("express");
const controller = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/create", controller[0]);
userRouter.get("/readAll", controller[1]);

module.exports = userRouter;
