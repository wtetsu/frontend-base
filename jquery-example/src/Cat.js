var Animal = require("./Animal.js");

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    calc (arr) {
        return arr.map( a => a*a);
    }
}

module.exports = Cat;
