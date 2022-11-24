const request = require("request");
const args = process.argv.slice(2, process.argv.length);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data[0]);
    console.log(typeof data);
  }
);
