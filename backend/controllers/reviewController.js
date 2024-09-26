const Review = require('../models/reviewModel');

// Post a review
const postReview = async (req, res) => {
    const { user, skill, rating, comment } = req.body;

    try {
        const review = new Review({
            user: req.userId,
            skill,
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
        const reviews = await Review.find({ user: req.params.userId })
            .populate('user', 'username email');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { postReview, getReviews };