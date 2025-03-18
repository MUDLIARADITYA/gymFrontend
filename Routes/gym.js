const express = require("express")
const router = express.Router();
const GymController = require('../Controllers/gym')


router.post('/register',GymController.register);
module.exports = router;