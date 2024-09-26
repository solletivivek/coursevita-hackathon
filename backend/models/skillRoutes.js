const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    trades: Number,
});

module.exports = mongoose.model('Skill', skillSchema);
