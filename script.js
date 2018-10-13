$(document).ready(function () {
    
});

function myFunction() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}

$(document).ready(function () {
  $("p").hover(function () {
      $(this).css("background-color", "white");

   }, function(){
       $(this).css("background-color", "pink")
   });
});

$(document).ready(function() {
    $("a").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.")
    });
});

       

$(document).ready(function () {
    $("input").keydown(function () {
        $(this).css("color", "red");
    });
});