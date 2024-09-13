// Inicializar EmailJS con tu clave pública
emailjs.init('ZKuhBcwMU3vV7QQLP');

// Capturar el evento click en el botón imagen
document.getElementById('imageButton').addEventListener('click', function() {
    // Obtener los valores de los campos
    const emailField = document.getElementById('field2').value;
    const documentTypeSelect = document.getElementById('field3').value;
    const documentNumber = document.getElementById('field1').value;

    // Expresión regular para validar que el correo termine en @upb.edu.co
    const emailRegex = /^[^\s@]+@upb\.edu\.co$/;

    // Verificar si el correo es válido
    if (!emailRegex.test(emailField)) {
        // Si el correo no es válido, mostrar el mensaje de error en una alerta
        alert('El correo institucional debe tener el dominio @upb.edu.co.');
        return; // No continuar si el correo no es válido
    }

    // Crear el objeto con los parámetros que se enviarán a EmailJS
    const emailParams = {
        correo: emailField,
        documento: documentNumber,
        documentType: documentTypeSelect, // Asegúrate de que el nombre coincida
    };

    // Enviar los datos a través de EmailJS
    emailjs.send('service_1u41kk2', 'template_cu05kwk', emailParams)
        .then(function(response) {
            // Mostrar alerta de éxito
            alert('Enviado exitosamente');
            // Recargar la página después de enviar
            location.reload();
        }, function(error) {
            // Mostrar alerta de error si el envío falla
            alert('Error: ' + JSON.stringify(error));
        });
});
