
//Cantidad de palabras contador

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


