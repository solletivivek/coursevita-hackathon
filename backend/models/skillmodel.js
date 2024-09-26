const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Skill', skillSchema);
