// /controllers/barterController.js

const Barter = require('../models/barterModel');

// Create a barter
exports.createBarter = async (req, res) => {
  const { offeredSkill, requestedSkill } = req.body;

  try {
    const barter = new Barter({
      offeredSkill,
      requestedSkill,
      user: req.user._id,
    });

    const createdBarter = await barter.save();
    res.status(201).json(createdBarter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all barters
exports.getAllBarters = async (req, res) => {
  try {
    const barters = await Barter.find({});
    res.json(barters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get barter by ID
exports.getBarterById = async (req, res) => {
  try {
    const barter = await Barter.findById(req.params.id);

    if (barter) {
      res.json(barter);
    } else {
      res.status(404).json({ message: 'Barter not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
