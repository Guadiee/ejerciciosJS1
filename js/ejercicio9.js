let frase = prompt("Ingrese una frase");
let vocales = ['a', 'e', 'i', 'o', 'u'];
let frase1 = frase.split('');

frase1.forEach(letra => {
    if (vocales.includes(letra)) {
        document.write("<br>Contiene la vocal " + letra);
    }
});