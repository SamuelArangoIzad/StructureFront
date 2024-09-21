// Función para seleccionar la imagen 1
function seleccionarImagen1JEatbox() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActual1');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLink1');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActual1', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para seleccionar la imagen 2
function seleccionarImagen2JEatbox() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActual');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLink');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActual', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para cargar las imágenes desde localStorage
function cargarImagenDesdeStorage() {
    const imagenGuardada1 = localStorage.getItem('imagenActual1');
    if (imagenGuardada1) {
        const imgElement1 = document.getElementById('imagenActual1');
        imgElement1.src = imagenGuardada1;

        // Actualizar el enlace para descargar
        const linkElement1 = document.getElementById('imagenLink1');
        linkElement1.href = imagenGuardada1; // Actualizar el enlace para descargar
    }

    const imagenGuardada2 = localStorage.getItem('imagenActual');
    if (imagenGuardada2) {
        const imgElement2 = document.getElementById('imagenActual');
        imgElement2.src = imagenGuardada2;

        // Actualizar el enlace para descargar
        const linkElement2 = document.getElementById('imagenLink');
        linkElement2.href = imagenGuardada2; // Actualizar el enlace para descargar
    }
}

// Llamar a la función al cargar la página
window.onload = cargarImagenDesdeStorage;
