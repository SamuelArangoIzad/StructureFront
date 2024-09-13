
document.getElementById('verifyButton').addEventListener('click', function() {
    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const field3 = document.getElementById('field3').value;

    // Obtener el elemento para mostrar el mensaje de error
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = ''; // Limpiar el mensaje de error

    // Validar campo field1: solo números sin puntos
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(field1)) {
        errorMessageElement.textContent = 'Recuerda que el documento debe ser con números sin puntos, sin espacios.';
        return;
    }

    // Validar que field2 y field3 sean iguales y contengan un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (field2 !== field3) {
        errorMessageElement.textContent = 'El correo electrónico debe ser igual al de confirmación.';
        return;
    }

    if (!emailRegex.test(field2)) {
        errorMessageElement.textContent = 'El campo Correo Electrónico debe contener una dirección de correo electrónico válida.';
        return;
    }

    // Si todo está correcto, redirigir a b-Diligenciacion.html
    //errorMessageElement.textContent = 'Todos los campos son válidos.';
    window.location.href = 'Diligenciacion.html';
});
