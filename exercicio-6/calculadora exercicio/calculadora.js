const valorX = prompt("primeiro número");
const valorY = prompt("segundo número");

const x = parseFloat(valorX);
const y = parseFloat(valorY);

const Soma = x + y;
const Subtração = x - y;
const Multiplicação = x * y;
const Divisão = x / y;

alert(
  "Resultado dos valores\n" +
    "\n Soma: " +
    Soma +
    "\n Subtração: " +
    Subtração +
    "\n muliplicação: " +
    Multiplicação +
    "\n divisão: " +
    Divisão
);
