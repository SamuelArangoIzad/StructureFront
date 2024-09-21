function seleccionarImagen1FruitJuice() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActualFruitJuice1');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLink1FruitJuice');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActualFruitJuice1', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para seleccionar la segunda imagen de FruitJuice
function seleccionarImagen2FruitJuice() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Cambiar la fuente de la imagen en la página
                const imgElement = document.getElementById('imagenActualFruitJuice2');
                imgElement.src = e.target.result;

                // Actualizar el enlace para descargar
                const linkElement = document.getElementById('imagenLinkFruitJuice');
                linkElement.href = e.target.result; // Actualizar el enlace para descargar
                linkElement.download = file.name; // Establecer el nombre del archivo para la descarga

                // Guardar la imagen en localStorage
                localStorage.setItem('imagenActualFruitJuice2', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Función para cargar las imágenes de FruitJuice desde localStorage
function cargarImagenDesdeStorageFruitJuice() {
    const imagenGuardada1 = localStorage.getItem('imagenActualFruitJuice1');
    if (imagenGuardada1) {
        const imgElement1 = document.getElementById('imagenActualFruitJuice1');
        imgElement1.src = imagenGuardada1;

        // Actualizar el enlace para descargar
        const linkElement1 = document.getElementById('imagenLink1FruitJuice');
        linkElement1.href = imagenGuardada1; // Actualizar el enlace para descargar
    }

    const imagenGuardada2 = localStorage.getItem('imagenActualFruitJuice2');
    if (imagenGuardada2) {
        const imgElement2 = document.getElementById('imagenActualFruitJuice2');
        imgElement2.src = imagenGuardada2;

        // Actualizar el enlace para descargar
        const linkElement2 = document.getElementById('imagenLinkFruitJuice');
        linkElement2.href = imagenGuardada2; // Actualizar el enlace para descargar
    }
}

// Llamar a la función al cargar la página
window.onload = cargarImagenDesdeStorageFruitJuice;