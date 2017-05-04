var calc = require("../src/calc.js");
var assert = require("assert");

describe('calc', () => {
    it("should return 10.", () => {
        assert.equal(10, calc.plus(4, 6));
    });
    it("should return 7.", () => {
        assert.equal(7, calc.minus(10, 3));
    });
});
