// /routes/userRoutes.js

const express = require('express');
const { getUserProfile, updateUserProfile, getAllUsers } = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/profile').get(authMiddleware, getUserProfile).put(authMiddleware, updateUserProfile);
router.route('/').get(authMiddleware, getAllUsers);

module.exports = router;
