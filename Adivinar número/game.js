// Genera un número aleatorio entre 1 y 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtiene el formulario y el campo de entrada
var form = document.querySelector('form');
var input = document.querySelector('input');
var result = document.querySelector('#result');

// Maneja el envío del formulario
form.addEventListener('submit', function(event) {
	event.preventDefault(); // Evita que se envíe el formulario
	var guess = parseInt(input.value);
	if (guess === randomNumber) {
		result.textContent = '¡Correcto! Elnúmero era ' + randomNumber + '.';
        result.classList.add('correct');
        result.classList.remove('incorrect');
        } else {
        var difference = Math.abs(randomNumber - guess);
        if (difference <= 5) {
        result.textContent = 'Cerca... El número era ' + randomNumber + '.';
        } else if (difference <= 10) {
        result.textContent = 'No tan cerca... El número era ' + randomNumber + '.';
        } else {
        result.textContent = 'Ni cerca... El número era ' + randomNumber + '.';
        }
        result.classList.add('incorrect');
        result.classList.remove('correct');
        }
        result.style.display = 'block'; // Muestra el resultado
        form.reset(); // Reinicia el formulario
        input.focus(); // Hace foco en el campo de entrada
        });