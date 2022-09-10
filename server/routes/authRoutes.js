const express = require('express')

const auhtController = require('../controllers/authController')

const router = express.Router();

router.post("/signup",auhtController.signup)

module.exports = router;
