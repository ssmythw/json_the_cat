const request = require("request");
const args = process.argv.slice(2, process.argv.length);
console.log(args[0]);

const fetchBreedDescription = (breed, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        body = JSON.parse(body);
        callback(null, body[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
