const url = 'http://numbersapi.com/random/year?json';
const fetch = require('node-fetch');
const year = process.argv[2];



fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.text))
  .catch(err => console.log('error:', err))
