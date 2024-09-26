// /routes/barterRoutes.js

const express = require('express');
const { createBarter, getAllBarters, getBarterById } = require('../controllers/barterController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(authMiddleware, createBarter).get(getAllBarters);
router.route('/:id').get(getBarterById);

module.exports = router;
