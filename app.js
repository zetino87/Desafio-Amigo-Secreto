// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los participantes
let participantes = [];

// Referencias a los elementos del DOM
const nombreInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para añadir un nombre a la lista
function agregarAmigo() {
    const nombre = nombreInput.value.trim();

    if (nombre) {
        participantes.push(nombre); // Añadir el nombre al array
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = nombre; // Asignar el nombre al <li>
        listaAmigos.appendChild(li); // Añadir el <li> a la lista
        nombreInput.value = ''; // Limpiar el cuadro de texto
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (participantes.length < 2) {
        alert('Debes añadir al menos dos nombres para realizar el sorteo.');
        return;
    }

    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    const amigoSecreto = participantes[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
}