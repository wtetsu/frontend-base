export class Animal {
    protected name : string

    constructor (name : string) {
        this.name = name;
    }

    public say() {
        console.info(this.name);
    }
}
