let opcao = ""
let arr = []


do {
  let loopText = ""
  for (let index = 0; index < arr.length; index++) {
    loopText += `${index + 1}. ${arr[index]} \n`
    
  }
  opcao = prompt("Lista de espera de pacientes: \n" + loopText + "\n1. Novo paciente \n2. Atender paciente \n3. Sair")
  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Insira o nome do novo paciente:")
      arr.push(novoPaciente)
      break;
      case "2":
     pacienteRemoved = arr.shift()
     alert(pacienteRemoved + " foi atendido")
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