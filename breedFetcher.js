const request = require("request");
const userInput = process.argv.slice(2)[0];
// console.log(userInput)

//create a function to fetch a breed
//in there use a request to make a request to an api
//check if the status code is successful
//handle errors
//parse the data from the JSON

const fetchCatsBreed = (breed, callback) => {
  //making the breed search dynamic
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    //if system error occurs
    if (error) {
      callback(error, null);
      return;
    }
    //success case but check for edge cases
    if (response.statusCode !== 200) {
      callback("Bad request", null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.length) {
      // console.log('There is no record')
      callback("Breed not found", null);
      return;
    }
    callback(null, data[0].description);
  });
};

fetchCatsBreed(userInput, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("data", data);
  }
});
