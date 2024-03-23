const express = require("express");
const { createuser, loginuser } = require("../Controller/UserController");
const route = express.Router();

route.post("/createuser",createuser)
route.post("/userlogin",loginuser)

module.exports= route