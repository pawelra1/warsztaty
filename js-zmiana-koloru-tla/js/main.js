'use strict';

var hD = "0123456789ABCDEF";
var i = 0;

function d2h(d) {
    var h = hD.substr(d & 15, 1);
    while (d > 15) {
        d >>= 4;
        h = hD.substr(d & 15, 1) + h;
    }
    return h;
}

function h2d(h) {
    return parseInt(h, 16)
};


function zmien() {
    var random = Math.round(Math.random() * 16783200);
    window.setTimeout(random, 300);
    
    document.bgColor = d2h(random);
};