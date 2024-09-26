const Barter = require('../models/barterModel');

// Initiate a barter trade
const initiateTrade = async (req, res) => {
    const { user2, skillOffered, skillNeeded } = req.body;

    try {
        const barter = new Barter({
            user1: req.userId,
            user2,
            skillOffered,
            skillNeeded
        });

        await barter.save();
        res.status(201).json(barter);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update trade status (accepted/completed)
const updateTrade = async (req, res) => {
    const { status } = req.body;

    try {
        let barter = await Barter.findById(req.params.id);
        if (!barter) {
            return res.status(404).json({ msg: 'Barter not found' });
        }

        barter.status = status;
        await barter.save();
        res.json(barter);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all trades for a user
const getTrades = async (req, res) => {
    try {
        const trades = await Barter.find({
            $or: [{ user1: req.userId }, { user2: req.userId }]
        }).populate('user1 user2', 'username email');

        res.json(trades);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { initiateTrade, updateTrade, getTrades };
