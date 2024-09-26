const Review = require('../models/reviewModel');

// Post a review
const postReview = async (req, res) => {
    const { reviewee, rating, comment } = req.body;

    try {
        const review = new Review({
            reviewer: req.userId,
            reviewee,
            rating,
            comment
        });

        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get reviews for a user
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ reviewee: req.params.userId })
            .populate('reviewer', 'username email');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { postReview, getReviews };
