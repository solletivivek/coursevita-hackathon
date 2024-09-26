const express = require('express');
const { postReview, getReviews } = require('../controllers/reviewController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

// POST /api/reviews
router.post('/', auth, postReview);

// GET /api/reviews/:userId
router.get('/:userId', getReviews);

module.exports = router;
