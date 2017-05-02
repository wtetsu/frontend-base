import * as animal from "./animal";
import * as dog from "./dog";
import * as cat from "./cat";

let a = new animal.Animal("Something");
let c = new dog.Dog("Pochi");
let d = new cat.Cat("Tama");

a.say();
c.say();
d.say();
