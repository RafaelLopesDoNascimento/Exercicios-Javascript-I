alert(
  "Calculadora científica usando baskara." +
    "\nAviso: escolha um número que crie um delta positivo para ter uma raiz exata." +
    "\nOBS: O valor de B deve ser maior ao de A e C"
);

const valorA = prompt("Insira o valor de A:");
const valorB = prompt("Insira o valor de B:");
const valorC = prompt("Insira o valor de C:");

const A = parseFloat(valorA);
const B = parseFloat(valorB);
const C = parseFloat(valorC);

const delta = B * B - 4 * A * C;

alert("Resultado: " + "\n" + delta);
// Parte Um OK

alert("Parte 2");

const valorRaizDelta = prompt(
  "Informe o valor da raiz do delta: " + "\nSeu valor do Delta: " + delta
);

const raizDelta = parseFloat(valorRaizDelta);

const parteCima1 = -B + raizDelta;
const parteCima2 = -B - raizDelta;
const parteBaixo = 2 * A;

const baskara1 = parteCima1 / parteBaixo;
const baskara2 = parteCima2 / parteBaixo;

alert(
  "\nValor utilizando mais : " +
    baskara1 +
    "\n" +
    "Valor utilizando menos : " +
    baskara2
);
