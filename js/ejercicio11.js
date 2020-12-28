let numeroIngresado = prompt("Ingrese un numero");
let arrayDeNumeros = [2, 3, 5, 7]

arrayDeNumeros.forEach((number, numeroDeVuelta, arrayDeNumeros) => {
    if (numeroIngresado % number == 0) {
        document.write('Es divisible por' + number)
    }
});