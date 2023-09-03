const numero = prompt("insira o numero");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += "-> " + numero + "*" + fator + "=" + numero * fator + "\n";
}

alert("resultado" + numero + ":\n\n" + resultado);
