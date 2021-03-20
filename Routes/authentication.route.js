"use strict";
const router = require("express").Router();
const { all, verifyToken, login, signUp, forgot, } = require("./../Controllers/authentication.controller");
router.route("/").get(verifyToken, all);
router.route("/authorize").post(verifyToken, (req, res) => {
    res.send({ user: req.user, auth: true });
});
router.route("/login").post(login);
router.route("/signup").post(signUp);
router.route("/forgot-password").post(forgot);
module.exports = router;
