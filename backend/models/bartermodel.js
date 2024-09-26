// /models/barterModel.js

const mongoose = require('mongoose');

const barterSchema = mongoose.Schema(
  {
    offeredSkill: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Skill',
    },
    requestedSkill: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Skill',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Barter = mongoose.model('Barter', barterSchema);
module.exports = Barter;
