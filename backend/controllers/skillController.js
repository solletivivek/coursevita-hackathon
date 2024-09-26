const Skill = require('../models/skillModel');

// Post a new skill
const postSkill = async (req, res) => {
    const { skillName, description, category } = req.body;

    try {
        const skill = new Skill({
            userId: req.userId,
            skillName,
            description,
            category
        });

        await skill.save();
        res.status(201).json(skill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all skills
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Match skills
const matchSkills = async (req, res) => {
    const { skillsOffered, skillsNeeded } = req.body;

    try {
        const matches = await Skill.find({
            skillName: { $in: skillsNeeded }
        }).populate('userId', 'username email');

        res.json(matches);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { postSkill, getSkills, matchSkills };
