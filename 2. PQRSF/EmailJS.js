
//Verificar los campos


emailjs.init('lybdwM9T0oeTy2ajB');

// Cantidad de palabras contador
document.getElementById('textBox').addEventListener('input', function() {
    const maxWords = 200;
    const textBox = document.getElementById('textBox');
    const wordCountElement = document.getElementById('wordCount');

    // Dividir el texto en palabras y contar cuántas hay
    let words = textBox.value.trim().split(/\s+/);
    
    // Si hay una palabra vacía, ajustamos la cantidad a 0
    if (words[0] === '') {
        words = [];
    }

    // Mostrar el contador de palabras
    wordCountElement.textContent = `${words.length} / ${maxWords} palabras`;

    // Verificar si se excede el máximo de palabras
    if (words.length > maxWords) {
        // Limitar el texto a las primeras 200 palabras
        textBox.value = words.slice(0, maxWords).join(' ');
        wordCountElement.textContent = `${maxWords} / ${maxWords} palabras`;
    }
});

// Función para validar el número de celular
function validatePhoneNumber(phoneNumber) {
    return /^\d+$/.test(phoneNumber);
}

// Función para validar el correo institucional
function validateInstitutionalEmail(email) {
    const regex = /^[^\s@]+@upb\.edu\.co$/;
    return regex.test(email);
}


// Verificar los campos y enviar el formulario
document.getElementById('pqrsfForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const field1 = document.getElementById('field1').value.trim();
    const field2 = document.getElementById('field2').value.trim();
    const field3 = document.getElementById('field3').value.trim();
    const field4 = document.getElementById('field4').value.trim();
    const motivoTipe = document.getElementById('motivoTipe').value;
    const textBox = document.getElementById('textBox').value.trim();

    // Validar el número de celular
    if (!validatePhoneNumber(field3)) {
        alert('El campo Celular debe contener números minimanete 10 para podernos contactar.');
        return;
    }

    // Validar el correo institucional
    if (!validateInstitutionalEmail(field4)) {
        alert('El correo institucional debe tener el dominio @upb.edu.co.');
        return;
    }

    const btn = document.getElementById('submitButton');
    btn.value = 'Enviando...';

    const serviceID = 'service_30b3g7q'; // Reemplaza con tu ID de servicio
    const templateID = 'template_hkeiv3o'; // Reemplaza con tu ID de plantilla

    // Enviar el formulario a EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then((response) => {
            btn.value = 'Enviar';
            alert('¡Correo enviado con éxito!');

            //REDIRRECION Y ELIMINACION POR SI QUIERE VOLVER
            setTimeout(() => {
                window.location.href = 'Filtro.html'; //a-Filtro
            }, 5000);
        }, (error) => {
            btn.value = 'Enviar';
            alert('Error: ' + JSON.stringify(error));
        });
});
