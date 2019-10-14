const fetch = require('node-fetch');
const year = process.argv[2];
const url = `http://numbersapi.com/${year ? year : 'random'}/year?json`;



fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.text))
  .catch(err => console.log('error:', err))
