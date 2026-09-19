require("dotenv").config();
const users = require("../db");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken")

const userRegistered = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const findUser = users.find((u) => u.email === req.body.email);
  if (findUser) {
    return res.status(400).json({
      status: "error",
      message: "Email already exist please login",
    });
  } else {
    const userId = uuidv4();

    const hashedPassword = await hashPassword(password);

    const newUser = {
      id: userId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      role: "user",
    };

    users.push(newUser);

    console.log(
      `${newUser.name} your account has been registered successfully`,
    );
    console.log(users);

    res.status(200).json({
      message: "user registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        password: newUser.password,
      },
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const getUser = users.find((u) => u.email === req.body.email);

  if (!getUser) {
    return res.status(401).json({
      status: "error",
      message: "Invalid email or password",
    });
  }

  const passwordCompare = await comparePassword(password, getUser.password);

  if (!passwordCompare) {
    return res.status(401).json({
      status: "error",
      message: "invalid password",
    });
  };

  if(!process.env.JWT_SECRET){
    return res.status(500).json({
      status : "error",
      message : "Token is not configures"
    })
  };

  const token = jwt.sign({
    id : getUser.id,
    name : getUser.email,
    email : getUser.email,
    role : getUser.role
  },
  process.env.JWT_SECRET,
  {expiresIn : "1h"}
);

return res.status(200).json({
  status : "sucesss",
  message : "login successful",
  userId : getUser.id,
  name : getUser.name,
  email : getUser.email,
  role : getUser.role,
  token : token
});
};

module.exports = { userRegistered, userLogin };
