'use strict';

window.addEventListener('scroll', function () {

    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

    console.log(offset);
    console.log(height);
    console.log("----");

    if (offset == height) {
        console.log("Jestem u dołu");      
        //ajax
        
            $.getJSON(
                "https://jsonplaceholder.typicode.com/users",
                function (data) {
                    $("body").append("<div>" + "<p>" + data[0].phone + "</p>" + "</div>");
                    console.log(data[0]);
                }
            );
        
        //ajax end

    }
});

                    //petla
                    for(i=0; i>0; i++);
                    //koniec petli  
