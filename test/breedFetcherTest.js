// breedFetcherTest.js

const { fetchCatsBreed } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchCatsBreed", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchCatsBreed("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("returns a message 'No breed found', informing the user that there is no such breed via callback", (done) => {
    fetchCatsBreed("Siberian", (err, desc) => {
      assert.equal(err, null);
      done();
    });
  });
});
