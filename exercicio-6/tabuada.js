const numero = prompt("informe o numero para verificar sua tabuada");

let show = `Tabuada do numero ${numero}:`
for (let index = 0; index <= 20; index++) {
 show += `\n ${numero} * ${index} = ${numero * index}`
  
}

alert(show)
