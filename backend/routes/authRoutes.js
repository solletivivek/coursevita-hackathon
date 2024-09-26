// /routes/authRoutes.js

const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { validateRequest } = require('../middlewares/validateRequest');
const router = express.Router();

router.post('/register', validateRequest, registerUser);
router.post('/login', validateRequest, loginUser);

module.exports = router;
