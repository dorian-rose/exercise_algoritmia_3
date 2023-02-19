// Imprime todos los números del 1 al 1000 por consola,
//con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de imprimir el número, se imprimirá Fizz,
//en los números que sean múltiplos de 5 se imprimirá Buzz, y además en los números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz.
let numeros = [];
const result = document.querySelector(".result");

function imprimir() {
  result.innerHTML = numeros;
}

function doFizzBuzz() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      numeros.push(i);
    } else {
      if (i % 3 == 0 && i % 5 == 0) {
        numeros.push("fizzbuzz");
      } else {
        if (numeros[i] % 3 == 0) {
          numeros.push("fizz");
        } else {
          if (numeros[i] % 5 == 0) {
            numeros.push("buzz");
          }
        }
      }
    }
  }
  imprimir();
}

function getArray() {
  doFizzBuzz();
}
