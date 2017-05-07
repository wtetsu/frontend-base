import * as animal from "./animal";

export class Dog extends animal.Animal {
    constructor(name: string) {
        super(name);
    }

    public say() {
        this.out(this.name + ": wan!");
    }
}
