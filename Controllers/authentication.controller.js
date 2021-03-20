"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const User = require("./../Models/user.model");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
exports.all = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.verifyToken = async (req, res, next) => {
    const token = req.header("authToken");
    if (!token)
        return res.status(401).send("access denied");
    try {
        const verified = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
};
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("User not Found");
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign({ name: user.name, id: user._id }, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).header("authToken", accessToken).send(user);
        }
        else
            res.status(401).send("Incorrect Password");
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
exports.signUp = async (req, res) => {
    try {
        //Check if email already exists
        const check = await User.findOne({ email: req.body.email });
        if (check)
            return res.status(409).send("Email already in use");
        //add new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            notebooks: [
                {
                    id: v4(),
                    name: "Notebook 1",
                    content: "",
                },
            ],
        });
        await user.save();
        res.status(202).send("Account Created");
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.forgot = async (req, res) => {
    console.log(req.body);
    res.status(200).send("Try again later");
};
