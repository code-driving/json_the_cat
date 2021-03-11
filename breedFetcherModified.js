const request = require("request");

const fetchCatsBreed = (breed, callback) => {
  //making the breed search dynamic
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback("Bad request", null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.length) {
      callback("Breed not found", null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchCatsBreed };
