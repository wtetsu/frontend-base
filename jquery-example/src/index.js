let $ = require("jquery");

let Animal = require("./Animal.js");
let Cat = require("./Cat.js");

$(function(){
    var newDiv = $("<div></div>");
    newDiv.text("hello jQuery!").hide();

    $("body").append(newDiv);
    newDiv.fadeIn();

    var newAnimal = new Animal("Bob");
    var newCat = new Cat("Tama");


    $("body").append("<p>" + newAnimal.calc([1,2,3,4,5]) + "</p>");
    $("body").append("<p>" + newCat.calc([1,2,3,4,5]) + "</p>");
});
