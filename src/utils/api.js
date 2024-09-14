const fetch = require('node-fetch');

const url = 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote?ticker=AAPL&type=STOCKS';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'ea9ad3ed38msh33c68813a6de5dap1f16bdjsnf57cb61cddb5',
    'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}