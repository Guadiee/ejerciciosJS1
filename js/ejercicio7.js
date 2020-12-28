let numero1 = parseInt(prompt("Ingrese el primer numero"));

let numero2 = parseInt(prompt("Ingrese el segundo numero"));

let numero3 = parseInt(prompt("Ingrese el tercer numero"));

document.write(Math.max(numero1, numero2, numero3));

/*
SOLUCION 2
if (numero1 > numero2 && numero1 > numero3) {
  document.write("<br> el numero 1 es mayor")
}
if (numero2 > numero1 && numero2 > numero3) {
  document.write("<br> el numero 2 es mayor")
}
if (numero3 > numero2 && numero3 > numero1) {
  document.write("<br> el numero 3 es mayor")
}
*/

/* SOLUCION 3
if (numero1 > numero2) {
    if (numero1 > numero3) {
        document.write("<br> el numero 1 es mayor")
    } else {
        if (numero3 > numero2) {
            document.write("<br>el numero 3 es mayor");
        } else {
            document.write("<br>el numero 2 es mayor");
        }
    }
} else {
    if (numero2 > numero3) {
        document.write("<br>el numero 2 es mayor");
    } else {
        document.write("<br>el numero 3 es mayor");
    }
}
/*