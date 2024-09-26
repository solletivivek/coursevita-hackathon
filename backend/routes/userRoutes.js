const express = require('express');
const { getUserDetails, updateUserSkills } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');  // Middleware for protected routes
const router = express.Router();

// GET /api/users/me
router.get('/me', auth, getUserDetails);

// PUT /api/users/me/skills
router.put('/me/skills', auth, updateUserSkills);

module.exports = router;
