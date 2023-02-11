const express = require("express");
const router = express.Router()

const apiNotes = require("./apiNotes")
const htmlNotes = require("./htmlNotes")

router.use('/api/notes', apiNotes)
router.use("./htmlRoutes,", htmlNotes)

modules.exports = router;