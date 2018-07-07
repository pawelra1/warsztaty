'use strict';

function pokazCeneNetto() {
    let offersPriceNumber = document.getElementsByClassName('offer-price__number');

    for (let offer of offersPriceNumber) {
        let price = offer.innerText.replace(" ", "").replace(" PLN", "");
        let dzielenieDoNetto = parseFloat(price) / 1.23;
        let zaokraglenie = dzielenieDoNetto.toFixed(2);


        //wstawianie elementu na strone        

        let nowySpan = document.createElement("span");
        let tekstWSpanie = document.createTextNode("(" + zaokraglenie + " zł netto" + ")");

        nowySpan.appendChild(tekstWSpanie);
        offer.appendChild(nowySpan);
        
        nowySpan.className += "cena-netto";
        
        //wstawianie elementu na strone end
    }

}

document.addEventListener('DOMContentLoaded', pokazCeneNetto);