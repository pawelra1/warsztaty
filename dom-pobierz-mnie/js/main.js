/*Podczas wysyłania formularza zablokuj jego domyślne
działanie. Pobierz wartości obydwu pól formularza (czyli fname i
lname) i wyświetl jej w konsoli.*/

        
function pobierzImie(ev) {
    ev.preventDefault();
    //pobieramy do zmniennej elementy input
    var inputs = document.getElementsByTagName("input");
    /*console.log(inputs);*/ //sprawdza inputy na konsoli
    
    //zapisujemy do zmiennych atrybuty value pobranych inputów
    var fName = inputs[0].value;
    /*console.log(fName);*/
    
    var lName = inputs[1].value;
    /*console.log(lName);*/
    
    //console.log ze stworzonych zmiennych
    console.log(fName, lName);
}