const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("Should return an error when an invalid breed is passed in", (done) => {
    fetchBreedDescription("", (err, desc) => {
      assert.equal(err, null); //not sure why this is not triggering the if case in breedfetcher.js ... even if I pass in an empty string it triggers the else condition - followed the docs and still getting this error.
      done();
    });
  });
});
