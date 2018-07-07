'use strict';



$( function() {

var button = document.getElementById('button');
function pobierzDane(event) {


    
//pobranie JSON
    
    $.getJSON(
"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
function (data) {
    $( ".zrzutJson" ).html( "<p>" + data.userName + "</p>" );
}
);
    
//kończe pobierać JSONa
    
}


button.onclick = pobierzDane;

} );