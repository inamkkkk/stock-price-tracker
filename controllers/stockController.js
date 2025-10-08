const axios = require('axios');

exports.getStockPrice = async (req, res) => {
  try {
    const { symbol } = req.params;

    const apiKey = process.env.FINANCIAL_DATA_API_KEY;
    const apiUrl = process.env.FINANCIAL_DATA_API_URL;

    const url = `${apiUrl}/${symbol}?apikey=${apiKey}`;
    const response = await axios.get(url);

    const stockData = response.data;

    if (!stockData || stockData.length === 0) {
      return res.status(404).json({ message: 'Stock data not found' });
    }

    res.json(stockData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch stock price' });
  }
};