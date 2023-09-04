let opcao = ""
let arr = []


do {
  let loopText = ""
  for (let index = 0; index < arr.length; index++) {
    loopText += `${index + 1}. ${arr[index]} \n`
    
  }
  opcao = prompt("Cartas do baralho: \n" + loopText + "\n1. Nova carta \n2. Remover uma carta \n3. Sair")
  switch (opcao) {
    case "1":
      let novaCarta = prompt("Insira o nome da nova carta:")
      arr.unshift(novaCarta)
      break;
      case "2":
     cartaRemoved = arr.shift()
     alert(cartaRemoved + " foi removida do baralho")
        break;
        case "3":
          alert("Voce escolheu 3")
          break;
    default: 
    alert("Opção inválida, tente de novo")
      break;
  }

} while (opcao !== "3");
alert("Saindo, Good night...")