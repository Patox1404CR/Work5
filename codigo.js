try {
    // Código que puede generar una excepción
    var boton = document.getElementById("Edad");
    boton.addEventListener("click", CalcularEdad);

    function CalcularEdad() {

        let Edad = parseInt(prompt("Digite su edad"));

        if (Edad >= 18) {
            alert("Eres Mayor de Edad");
        } else {
            alert("Eres Menor de Edad");
        }
    }
} catch (error) {
    // Código que maneja la excepción

}

try {
    // Código que puede generar una excepción
    var boton = document.getElementById("fecha");
    boton.addEventListener("click", calcularFecha);

    function calcularFecha() {
        // código que se ejecutará al hacer clic en el botón
        var dia = new Date().getDay(); // obtiene el número del día actual
        switch (dia) {
            case 0:
                alert("Hoy es domingo");
                break;
            case 1:
                alert("Hoy es lunes");
                break;
            case 2:
                alert("Hoy es martes");
                break;
            case 3:
                alert("Hoy es miércoles");
                break;
            case 4:
                alert("Hoy es jueves");
                break;
            case 5:
                alert("Hoy es viernes");
                break;
            case 6:
                alert("Hoy es sábado");
                break;
            default:
                alert("Día inválido");
        }
    }

} catch (error) {

}

try {

    var boton = document.getElementById("trycath");
    boton.addEventListener("click", imagen);

    // Código que puede generar una excepción
    function imagen() {
        var imagen = document.createElement("img");
        imagen.src = "C:\Users\50671\Documents\Curso Js\CREAR SOLUCIONES\Capitulo 1\img\1.jpg";
    }
} catch (error) {
    // Código que maneja la excepción
}

try {

    var boton = document.getElementById("Error");
    boton.addEventListener("click", error);

    function error() {
        var miError = new Error("Este es mi mensaje de error");
        throw miError;
    }
} catch (error) {
    // Código que maneja la excepción
}

try {

    var boton = document.getElementById("for");
    boton.addEventListener("click", ejemploFor);

    function ejemploFor() {

        for (let i = 0; i <= 10; i++) {
            alert(i);
        }
    }

} catch (error) {
    // Código que maneja la excepción
}


try {
    var boton = document.getElementById("while");
    boton.addEventListener("click", ejemploWhile);

    function ejemploWhile() {

        let i = 0;
        while (i < 3) { // muestra 0, luego 1, luego 2
            alert(i);
            i++;
        }
    }

} catch (error) {
    // Código que maneja la excepción
}

try {
    var boton = document.getElementById("dowhile");
    boton.addEventListener("click", ejemploDoWhile);

    function ejemploDoWhile() {

        let i = 0;
        while (i < 5) { // muestra 0, luego 1, luego 2
            alert(i);
            i++;
        }
    }
} catch (error) {
    // Código que maneja la excepción
}
