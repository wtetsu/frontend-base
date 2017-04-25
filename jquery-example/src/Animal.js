class Animal {
    constructor(name) {
        this.name = name;
    }

    calc (arr) {
        return arr.map( a => a+a);
    }
}

module.exports = Animal;
