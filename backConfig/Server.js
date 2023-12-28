const express = require ("express")
const connectDb = require ("./Config/connectDb")
require ('dotenv').config()
const authRoute = require ("./Routes/Auth")
const cors = require('cors')

const app = express ()
app.use (cors())
app.use(express.json())
app.use('/' , authRoute)
connectDb ()

app.listen (process.env.PORT || 3000, ()=> {
    console.log (`app listen on ${process.env.PORT}`)
})

