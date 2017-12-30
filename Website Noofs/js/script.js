/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var nav = document.querySelector('header > nav');

var button = document.querySelector('header > button');

var open = function () {
  nav.classList.toggle('open')
}

button.addEventListener('click', open);
