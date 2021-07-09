const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

<<<<<<< HEAD
//INICIO
router.get("/", mainController.index);
=======
router.get("/", mainController.nindex);
>>>>>>> 3e3469a13c6316aeeb018350ff05e3a03f3a4ff4



module.exports = router;