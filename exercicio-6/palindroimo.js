let Word = prompt("Informe uma palavra:")

let NewWord = ""

for (let index = Word.length - 1; index >= 0; index--) {
  NewWord += Word[index]
}

if (Word == NewWord) {
  
  alert(`${NewWord} é um polindromo`)
} else {
  alert(`${NewWord} não é um polindromo pois é diferente de ${Word}`)
}