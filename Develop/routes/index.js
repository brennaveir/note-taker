const express = require("express");
const router = express.Router()

const notes = require("./notes")
const htmlRoutes = require("./htmlRoutes")

router.use('/notes', notes)
router.use("./htmlRoutes,", htmlRoutes)

modules.exports = router;