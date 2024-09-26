// /routes/reviewRoutes.js

const express = require('express');
const { createReview, getReviewsForBarter } = require('../controllers/reviewController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/:barterId/reviews').post(authMiddleware, createReview).get(getReviewsForBarter);

module.exports = router;
