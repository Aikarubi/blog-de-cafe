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

//console.log(1);

window.addEventListener('load', function () { //load espera a que el JS y los archivos que dependen del HTML estén listos
    //console.log(2);
});

//window.addEventListener('load', imprimir);

/*function imprimir() {
    console.log(2);
}*/

window.onload = function () {
    //console.log(3);
};

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
    //console.log(4);
});

//console.log(5);

/*window.onscroll = function() {
    console.log('scrolling...');
}*/

//Selecionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(event) {
    //console.log(event);
    //event.preventDefault(); //Prevenimos la accion de este caso enviar el formulario

    //Validar un formulario



   // console.log('enviado formulario');
});

// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

/*nombreInput.addEventListener('input', function(event) {
    console.log(event.target.value);
});

emailInput.addEventListener('input', function(event) {
    console.log(event.target.value);
});

mensajeInput.addEventListener('input', function(event) {
    console.log(event.target.value);
});*/

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    } 

    // Aprobar el envio del formulario
    mostrarAprobacion('Formulario Enviado Correctamente');

    // Enviar el formulario

    console.log('Formulario Enviado');
});

function leerTexto(event) {
    console.log(event.target.value);

    datos[event.target.id] = event.target.value;

    console.log(datos);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Elimina el error una vez que aparece
    setTimeout(() => {
        error.remove();
    }, 5000);
}

// Muestra un Aprobacion en pantalla
function mostrarAprobacion(mensaje) {
    const aprobacion = document.createElement('P');
    aprobacion.textContent = mensaje;
    aprobacion.classList.add('aprobacion');

    formulario.appendChild(aprobacion);

    //Elimina la aprobacion una vez que aparece
    setTimeout(() => {
        aprobacion.remove();
    }, 5000);
}