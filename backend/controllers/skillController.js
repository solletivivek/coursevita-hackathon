// /controllers/skillController.js

const Skill = require('../models/skillModel');

// Create a skill
exports.createSkill = async (req, res) => {
  const { name, description } = req.body;

  try {
    const skill = new Skill({
      name,
      description,
      user: req.user._id,
    });

    const createdSkill = await skill.save();
    res.status(201).json(createdSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get skill by ID
exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (skill) {
      res.json(skill);
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
