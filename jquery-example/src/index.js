var $ = require("jquery");

$(function(){
    var newDiv = $("<div></div>");
    newDiv.text("hello jQuery!").hide();

    $("body").append(newDiv);
    newDiv.fadeIn();
});
