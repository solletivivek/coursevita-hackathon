// /controllers/reviewController.js

const Review = require('../models/reviewModel');
const Barter = require('../models/barterModel');

// Create a review for a barter
exports.createReview = async (req, res) => {
  const { rating, comment } = req.body;

  try {
    const barter = await Barter.findById(req.params.barterId);

    if (barter) {
      const review = new Review({
        user: req.user._id,
        barter: barter._id,
        rating,
        comment,
      });

      const createdReview = await review.save();
      res.status(201).json(createdReview);
    } else {
      res.status(404).json({ message: 'Barter not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reviews for a barter
exports.getReviewsForBarter = async (req, res) => {
  try {
    const reviews = await Review.find({ barter: req.params.barterId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
