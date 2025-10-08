const express = require('express');
const stockController = require('../controllers/stockController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:symbol', authMiddleware, stockController.getStockPrice);

module.exports = router;