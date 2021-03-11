const { fetchCatsBreed } = require("./breedFetcher");
const userInput = process.argv.slice(2)[0];

fetchCatsBreed(userInput, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});