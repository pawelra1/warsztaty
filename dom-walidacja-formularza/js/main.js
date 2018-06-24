/*2.	Stwórz zmienną i przypisz do zmiennej ostatni checkbox (wszystkie-zgody) oraz stwórz drugą zmienną do której przypisz kolekcję wszystkich chekcboxów np. document.querySelectorAll('input[type=checkbox]')
3.	Stwórz funkcję checkboxState(), do której przekażesz stan ostatniego checkboxa (wszystkie-zgody) – true lub flase
4.	Funkcja checkboxState() ma zmienić stan każdego checkboxa za wyjątkiem ostatniego (wszystkie-zgody) na zaznaczony i dezaktywować go jeśli przekazywany parametr to true lub na odznaczony i aktywować go jeśli przekazywany parametr to false
5.	W ostatnim checkboxie (wszystkie-zgody) podepnij pod zdarzenie onchange funkcję, która wywoła funkcję checkboxState() i przekaże do niej jako parametr obecny stan checkboxa (true lub false)*/


//przycisk wyslij
var wyslijBtn = document.getElementById('wyslij');

//input imie
var inputImie = document.getElementById('name');


//input email
var inputEmail = document.getElementById('email');

//zgoda 1
var zgoda1 = document.getElementById('zgoda-marketingowa-1');

//zgoda 2
var zgoda2 = document.getElementById('zgoda-marketingowa-2');

//wszystkie zgody
var wszystkieZgody = document.getElementById('wszystkie-zgody');

//disabled - wyłącza pola formularza

//pod checkbox wszystkie-zgody podpinam funckję chechboxState
wszystkieZgody.addEventListener('change', checkboxState);

//funkcja checkboxState kontrolująca stan dwóch pierwszych checkboxów
function checkboxState() {
    //jeśli dla checkboxa wszystkie zgody checked == true 
    //to dla reszty zgód ustaw checked na true
    zgoda1.checked = wszystkieZgody.checked;
    zgoda2.checked = wszystkieZgody.checked;
    
    //jeśli dla checkboxa wszystkie zgody checked == true 
    //to dla reszty zgód ustaw disabled na true   
    zgoda1.disabled = wszystkieZgody.checked;
    zgoda2.disabled = wszystkieZgody.checked;
}

function validateForm(ev) {
    ev.preventDefault();
    //pobieram wszystkie inputy
    var inputs = document.querySelectorAll("input");
    
    //czyszczenie linii z komunikatami błędów
    wiadomosci.innerHTML = "";
    
    //przechodzę pętlą do pobranych inputów
    inputs.forEach(function( el, ind ){
        //waliduję tylko 3 pierwsze pola formularza
        //dlatego wszystkie pola z indeksem > 2
        //mnie interesują, więc kończę funckję
        //słównkiem return
        if ( ind > 2 ) {
            return;
        }
        
        //warunek dla checkboxa
        if( ind == 2) {
            if( el.checked == false ) {
                var errorLi = document.createElement('li');
                errorLi.innerHTML = "Nie zaznaczono zgody";
                wiadomosci.appendChild(errorLi);
            } else {
                if( el.value == " " ) {
                var errorLi = document.createElement('li');
                errorLi.innerHTML = "Nie wypełniono pola o id:" + el.id;
                wiadomosci.appendChild;
                }
            }
        }
        console.log(el, ind);
    });
}

//pod zdarzenie click przycisku podpinam funkcje
//walidujaca formularz validateForm
wyslijBtn.addEventListener('click', validateForm);
