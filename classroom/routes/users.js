const express = require("express");
const router = express.Router();

//USERS Routes
router.get("/",(req, res) => {
	res.send("GET for users");
})

router.get("/:id",(req, res) => {
	res.send("GET for users id");
})

router.post("/",(req, res) => {
	res.send("POST for users");
})

router.delete("/:id",(req, res) => {
	res.send("DELETE for users");
})

module.exports = router;