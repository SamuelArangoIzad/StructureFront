// Función para seleccionar la primera imagen
function seleccionarImagenKCavamar1() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActualKCavamar1');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLinkKCavamar1');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActualKCavamar1', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para seleccionar la segunda imagen
function seleccionarImagenKCavamar2() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActualKCavamar2');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLinkKCavamar2');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActualKCavamar2', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para cargar las imágenes desde localStorage
function cargarImagenDesdeStorageKCavamar() {
    const imagenGuardada1 = localStorage.getItem('imagenActualKCavamar1');
    if (imagenGuardada1) {
        const imgElement1 = document.getElementById('imagenActualKCavamar1');
        imgElement1.src = imagenGuardada1;

        const linkElement1 = document.getElementById('imagenLinkKCavamar1');
        linkElement1.href = imagenGuardada1;
    }

    const imagenGuardada2 = localStorage.getItem('imagenActualKCavamar2');
    if (imagenGuardada2) {
        const imgElement2 = document.getElementById('imagenActualKCavamar2');
        imgElement2.src = imagenGuardada2;

        const linkElement2 = document.getElementById('imagenLinkKCavamar2');
        linkElement2.href = imagenGuardada2;
    }
}

// Llamar a la función al cargar la página
window.onload = cargarImagenDesdeStorageKCavamar;
