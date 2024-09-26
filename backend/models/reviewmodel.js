const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill', required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
});

module.exports = mongoose.model('Review', reviewSchema);
