const palavra = prompt("coloque sua palavra:");

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um polindromo");
} else {
  alert(
    palavra + " não é um palindromo\n\n" + palavra + "!==" + palavraInvertida
  );
}
