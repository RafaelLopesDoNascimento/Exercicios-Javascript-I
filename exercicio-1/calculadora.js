let valorX = parseFloat(prompt("Insira o primeiro valor:"))

let valorY = parseFloat( prompt("Insira o segundo valor:"))

let soma = valorX + valorY
let subtracao = valorX - valorY
let multi = valorX * valorY
let div = valorX / valorY

window.alert(`
Soma: ${valorX} + ${valorY} = ${soma}
Subtração: ${valorX} - ${valorY} = ${subtracao}
Multiplicação: ${valorX} * ${valorY} = ${multi}
Divisão: ${valorX} / ${valorY} = ${div}
`)