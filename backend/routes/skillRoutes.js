// /routes/skillRoutes.js

const express = require('express');
const { createSkill, getAllSkills, getSkillById } = require('../controllers/skillController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(authMiddleware, createSkill).get(getAllSkills);
router.route('/:id').get(getSkillById);

module.exports = router;
