const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    reputation: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
