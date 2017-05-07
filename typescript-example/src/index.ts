import * as animal from "./animal";
import * as cat from "./cat";
import * as dog from "./dog";

const anAnimal = new animal.Animal("Something");
const aCat = new cat.Cat("Tama");
const aDog = new dog.Dog("Pochi");

anAnimal.say();
aCat.say();
aDog.say();
