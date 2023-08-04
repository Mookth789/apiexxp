const express = require("express");
const router = express.Router();

const { list,changeRole } = require("../Controllers/user");
const { auth, adminCheck } = require("../Middleware/auth");

// http://localhost:5000/api/user
router.get("/user",  adminCheck, list);
router.post("/change-role",  adminCheck, changeRole);

module.exports = router;