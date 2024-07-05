const express = require("express");
const { getNotes,
getNote,
updateNote,
createNote,
deleteNote } = require("../controllers/notecontroller");
const router = express.Router();

router.route("/").get(getNotes);

router.route("/:id").get(getNote);

router.route("/").post(createNote);

router.route("/:id").put(updateNote);

router.route("/:id").delete(deleteNote);

module.exports = router;