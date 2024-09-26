const express = require('express');
const { initiateTrade, updateTrade, getTrades } = require('../controllers/barterController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

// POST /api/barters
router.post('/', auth, initiateTrade);

// PUT /api/barters/:id
router.put('/:id', auth, updateTrade);

// GET /api/barters
router.get('/', auth, getTrades);

module.exports = router;
