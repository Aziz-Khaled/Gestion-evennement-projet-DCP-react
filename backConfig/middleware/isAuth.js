const jwt = require ('jsonwebtoken') ; 
const SignUp = require ('../Models/SignUp')


exports.isAuth = async (req, res , next) => {
    const token = req.header("authorization")
    try {
        if(!token) {
            return res.status(400).send({message: 'No token provided.' })
        }
        const decoded = jwt.verify(token,process.env.SECRET_OR_KEY )

        if (!decoded) {
            return res.status(401).send ({msg :"not authorized"})
        }
        const member = await SignUp.findById(decoded.id)
        req.member = member
        next () ; 
    } catch (error) {
        res.status(500).send({message: "error"})
    }
}