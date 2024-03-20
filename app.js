function encriptador() {
    var textoEncriptado = document.getElementById("textarea-encriptador").value;
    var imagen = document.getElementById("img-muneco");
    var boton = document.getElementById("copiar");
    var textOutput = document.getElementById("textarea-encriptador");

    if (textOutput.value.trim() === "") {
        imagen.style.display = "block";
        boton.style.display = "none";
    } else {
        imagen.style.display = "none";
        boton.style.display = "block";

        textoEncriptado = convertirCadena(textoEncriptado);
        textoEncriptado = limpiarCadena(textoEncriptado);
        let llaves = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        document.getElementById("text-output").innerHTML = textoEncriptado.split('').map(letra => llaves[letra] || letra).join('');
    }
}

function desencriptar(textoEncriptado) {
    var textoEncriptado = document.getElementById("textarea-encriptador").value;
    var imagen = document.getElementById("img-muneco");
    var boton = document.getElementById("copiar");
    var textOutput = document.getElementById("textarea-encriptador");

    if (textOutput.value.trim() === "") {
        imagen.style.display = "block";
        boton.style.display = "none";
    } else {
        imagen.style.display = "none";
        boton.style.display = "block";

        textoEncriptado = convertirCadena(textoEncriptado);
        textoEncriptado = limpiarCadena(textoEncriptado);
        let llaves = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        textoEncriptado = textoEncriptado.split(/(enter|imes|ai|ober|ufat)/)
            .map(part => llaves[part] || part)
            .join('');

        document.getElementById("text-output").innerHTML = textoEncriptado.split('').map(letra => llaves[letra] || letra).join('');
    }
}

function mostrarNotificacion() {
    var notification = document.getElementById("notification");
    notification.classList.add("show"); // Agregar clase "show" para mostrar la notificación

    // Ocultar la notificación después de 5 segundos
    setTimeout(function () {
        notification.classList.remove("show"); // Quitar clase "show" para ocultar la notificación
    }, 5000);
}

function copiarTexto() {
    var elemento = document.getElementById("text-output");
    var texto = elemento.textContent || elemento.innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                mostrarNotificacion();
            })
            .catch((error) => {
                console.error("Error al copiar el texto: ", error);
            });
    } else {
        console.error("El API del portapapeles no está soportado en este navegador.");
    }
}

function convertirCadena(textoEntrada) {
    return (textoMinusculas = textoEntrada.toLowerCase());
}

function limpiarCadena(cadena) {
    return cadena.replace(/[^\w\s]/gi, '');
}