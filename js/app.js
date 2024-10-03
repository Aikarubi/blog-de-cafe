//queryselector

const heading = document.querySelector('.header__texto h2'); // Retorna 0 o 1 elemento de la clase o id indicada
//const heading = document.querySelector('#heading');
heading.textContent = 'Nuevo Heading';
//heading.classList.add('nueva-clase');

//console.log(heading);

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces);

//console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


//getElementById

const heading2 = document.getElementById('heading');
//console.log(heading2);


// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

//Agregar el href

nuevoEnlace.href = 'https://youtube.com';

//Agregar el texto

nuevoEnlace.textContent = 'Ir a YouTube';

//Agregar la clase

nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//console.log(nuevoEnlace);

//Eventos

console.log(1);

window.addEventListener('load', function () { //load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

//window.addEventListener('load', imprimir);

/*function imprimir() {
    console.log(2);
}*/

window.onload = function () {
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
});

console.log(5);

/*window.onscroll = function() {
    console.log('scrolling...');
}*/