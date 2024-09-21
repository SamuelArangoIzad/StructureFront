// Inicializar EmailJS con tu clave pública
emailjs.init('ZKuhBcwMU3vV7QQLP');

// Capturar el evento click en el botón imagen
document.getElementById('imageButton').addEventListener('click', function() {
    // Obtener los valores de los campos
    const emailField = document.getElementById('field2').value;
    const documentTypeSelect = document.getElementById('field3').value;
    const documentNumber = document.getElementById('field1').value;



    // Función para validar que el correo termine en @upb.edu.co
    function validateInstitucionalEmail(correo) {
        const regex = /^[^\s@]+@upb\.edu\.co$/;
        return regex.test(correo);
    }

    function validarcampodocumento(documento) {
        // Verificar si el valor del campo es una cadena no vacía
        return documento.trim() !== '';
    }


    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = '';


    // Verificar si el campo de documento tiene información
    if (!validarcampodocumento(documentNumber)) {
        // Mostrar el mensaje de error en la página
        errorMessageElement.textContent = 'El campo del documento debe tener información';
        // Si es necesario detener el procesamiento, usa `return` aquí.
        return;
    }  

    // Verificar si el correo es válido
    if (!validateInstitucionalEmail(emailField)) {
        // Mostrar el mensaje de error en la página
        errorMessageElement.textContent = 'El correo institucional debe tener el dominio @upb.edu.co';
        // Si es necesario detener el procesamiento, usa `return` aquí.
        return;
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
