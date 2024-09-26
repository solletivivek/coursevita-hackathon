const mongoose = require('mongoose');

const barterSchema = new mongoose.Schema({
    offeredSkill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill', required: true },
    requestedSkill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill', required: true },
    userOffered: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userRequested: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('Barter', barterSchema);
