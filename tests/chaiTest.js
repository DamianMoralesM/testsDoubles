const chai = require("../node_modules/chai");
const expect = chai.expect;

describe("smoke test", function() {
  it("checks equality", function() {
    expect(true).to.be.false;
  });
});