const express = require('express');
const { postSkill, getSkills, matchSkills } = require('../controllers/skillController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

// POST /api/skills
router.post('/', auth, postSkill);

// GET /api/skills
router.get('/', getSkills);

// POST /api/skills/match
router.post('/match', auth, matchSkills);

module.exports = router;
