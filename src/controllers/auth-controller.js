const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var config = require("../../config");

const {
  registerValidation,
  loginValidation,
} = require("../services/validation");
const { formatResponse } = require("../helper/logger");

exports.registerUser = async (req, res) => {
  try {
    //validate data before creating user using the JOI.
    const { error } = registerValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    //check if email is already in DB i.e should be unique
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      res.status(400).send("Email already exist try another one.");
    } else {
      //Hash Password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      const savedUser = await user.save();
      res.send({ user: savedUser._id });
    }
  } catch (ex) {
    res.status(400).json(formatResponse(null, ex.message, false));
  }
};

exports.login = async (req, res) => {
  try {
    //validate data before logining user using the JOI.
    const { error } = loginValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    //check if user is in DB i.e if user is registered
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(400).send("Email doesnot found.");

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword) res.status(400).send("Invalid Password.");

    const token = jwt.sign({ _id: user._id }, config.TOKKEN_SECRET);
    res.header("Auth-Token", token);
    res.send(token); //send the token both in response body and also in the response header
  } catch (ex) {
    res.status(400).json(formatResponse(null, ex.message, false));
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (ex) {
    res.status(400).json(formatResponse(null, ex.message, false));
  }
};

exports.findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({
      name: user.name,
      email: user.email,
      _id: user._id,
      createdAt: user.createdAt,
    });
  } catch (ex) {
    res.status(400).json(formatResponse(null, ex.message, false));
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userInfo = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          updatedAt: Date.now(),
        },
      }
    );

    res.json(
      formatResponse(
        null,
        userInfo.nModified === 1
          ? "User data updated successfully"
          : "Nothing to modify"
      )
    );
  } catch (ex) {
    res.status(400).json(formatResponse(null, ex.message, false));
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const passwordMatched = await bcrypt.compare(
      req.body.oldPassword,
      user.password
    );
    if (!passwordMatched) res.status(400).send("Invalid Old Password entered");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    const userInfo = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          password: hashedPassword,
        },
      }
    );
    res.json(userInfo);
  } catch (ex) {
    res.status(400).json(formatResponse(null, ex.message, false));
  }
};
