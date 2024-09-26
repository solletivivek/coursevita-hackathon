const User = require('../models/userModel');

// Get user details
const getUserDetails = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update user skills (offered/needed)
const updateUserSkills = async (req, res) => {
    const { skillsOffered, skillsNeeded } = req.body;

    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.skillsOffered = skillsOffered || user.skillsOffered;
        user.skillsNeeded = skillsNeeded || user.skillsNeeded;

        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getUserDetails, updateUserSkills };
