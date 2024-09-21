function seleccionarImagen1BloqueAGualilo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActualBloqueAGualilo1');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLink1BloqueAGualilo');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActualBloqueAGualilo1', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para seleccionar la segunda imagen de BloqueAGualilo
function seleccionarImagen2BloqueAGualilo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActualBloqueAGualilo2');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLink2BloqueAGualilo');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActualBloqueAGualilo2', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para cargar las imágenes de BloqueAGualilo desde localStorage
function cargarImagenDesdeStorageBloqueAGualilo() {
    const imagenGuardada1 = localStorage.getItem('imagenActualBloqueAGualilo1');
    if (imagenGuardada1) {
        const imgElement1 = document.getElementById('imagenActualBloqueAGualilo1');
        imgElement1.src = imagenGuardada1;

        // Actualizar el enlace para descargar
        const linkElement1 = document.getElementById('imagenLink1BloqueAGualilo');
        linkElement1.href = imagenGuardada1; // Actualizar el enlace para descargar
    }

    const imagenGuardada2 = localStorage.getItem('imagenActualBloqueAGualilo2');
    if (imagenGuardada2) {
        const imgElement2 = document.getElementById('imagenActualBloqueAGualilo2');
        imgElement2.src = imagenGuardada2;

        // Actualizar el enlace para descargar
        const linkElement2 = document.getElementById('imagenLink2BloqueAGualilo');
        linkElement2.href = imagenGuardada2; // Actualizar el enlace para descargar
    }
}

// Llamar a la función al cargar la página
window.onload = cargarImagenDesdeStorageBloqueAGualilo;