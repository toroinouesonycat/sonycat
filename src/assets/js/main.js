document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('miVideo');

    // Intenta reproducir el video automáticamente al cargar
    var promise = video.play();

    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay iniciado
        }).catch(error => {
            // Autoplay fue bloqueado, intenta silenciar y reproducir
            video.muted = true;
            video.play();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('miVideo');
    video.muted = true;
    video.play().then(() => {
        // Una vez que el video comienza a reproducirse, intenta desactivar el silencio
        video.muted = false;
    }).catch(error => {
        console.error("La reproducción automática con sonido fue bloqueada por el navegador.");
        // Aquí podrías implementar una lógica alternativa, como mostrar un botón de reproducción
    });
});

function copyToClipboard(elementSelector) {
    var text = document.querySelector(elementSelector).innerText;
    var elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = text.split(': ')[1]; // Separa el 'CA: ' del resto del texto.
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);

    // Opcional: Muestra un mensaje de confirmación o cambia el estilo del botón para indicar que se ha copiado.
}

async function copyToClipboard(elementSelector) {
    var text = document.querySelector(elementSelector).innerText.split(': ')[1]; // Separa el 'CA: ' del resto del texto.
    try {
        await navigator.clipboard.writeText(text);
        // Opcional: Muestra un mensaje de confirmación o cambia el estilo del botón para indicar que se ha copiado.
        console.log('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar texto: ', err);
    }
}
