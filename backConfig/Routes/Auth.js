const express = require("express");
const auth = express.Router();
require ('dotenv').config()
const {authSignUp , authLogIn , postEvent , displayingEvents , deleteEvent} = require ("../Controllers/Contact.controller");
const { isAuth } = require("../middleware/isAuth");


auth.post("/signUp", authSignUp );

auth.post ('/logIn' ,authLogIn) ;

auth.get ('/currentMembers' , isAuth ,  (req , res) => {res.send (req.member)})

auth.post ('/postEvent' , postEvent ) ;

auth.get ('/displayevents' ,displayingEvents)
auth.delete ("/delete/:id",deleteEvent)
module.exports = auth;
