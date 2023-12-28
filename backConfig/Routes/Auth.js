const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = express.Router();
const SignUp = require("../Models/SignUp");
require ('dotenv').config()
const {authSignUp , authLogIn} = require ("../Controllers/Contact.controller");
const { isAuth } = require("../middleware/isAuth");


auth.post("/signUp", authSignUp );
auth.post ('/logIn' ,authLogIn) ;
auth.get ('/currentMembers' , isAuth ,  (req , res) => {
  res.send (req.member)
})


module.exports = auth;
