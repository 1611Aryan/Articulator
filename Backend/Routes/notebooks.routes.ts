export {};
const router = require("express").Router();
const { verifyToken } = require("./../Controllers/authentication.controller");
const {
  getNotebooks,
  updateNotebook,
  addNotebook,
  deleteNotebook,
} = require("./../Controllers/notebook.controller");

router.route("/:id").get(verifyToken, getNotebooks);

router.route("/update").put(verifyToken, updateNotebook);

router.route("/add").put(verifyToken, addNotebook);

router.route("/delete").post(verifyToken, deleteNotebook);

module.exports = router;
