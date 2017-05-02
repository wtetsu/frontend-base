import * as animal from "./animal";

export class Dog extends animal.Animal{
    constructor (name : string) {
        super(name);
    }

    public say() {
        console.info(this.name + ": wan!");
    }
}
