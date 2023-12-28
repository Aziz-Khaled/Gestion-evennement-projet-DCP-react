const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SignUp = require("../Models/SignUp");

exports.authSignUp = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    //find = searching if the member exist , if not it will create a new one
    const find = await SignUp.findOne({ email: email });
    if (find) {
     return  res.status(400).send({ msg: `member ${name} already exist` });
    }

    const member = new SignUp(req.body);
    const saltRounds = 10;
    const passwordHashed = bcrypt.hashSync(password, saltRounds);
    const memberID = { id: member._id };

    const token = jwt.sign(memberID, process.env.SECRET_OR_KEY);
    member.password = passwordHashed;
    await member.save();
    return res.status(200).send({ msg: `member ${name} added successfully`, token });
  } catch (error) {
    return res.status(400).send({ msg: "error", error });
  }
};


//logIn Post method
exports.authLogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const find = await SignUp.findOne({ email: email });
    if (!find) {
      res.status(400).send({ msg: "memeber not exist " });
    }

    const comparePass = await bcrypt.compare(password, find.password);
    if (!comparePass) {
      res.status(40).send({ msg: "bad credentials" });
    }
    const memberID = { id: find._id };
    const token = jwt.sign(memberID, process.env.SECRET_OR_KEY);
    res.status(200).send({ msg: "loggin successfully", token });
  } catch (error) {
    res.status(400).send({ msg: "bad credentials ..." });
  }
};
