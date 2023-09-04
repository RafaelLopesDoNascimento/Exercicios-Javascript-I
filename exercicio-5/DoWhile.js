let opcao = ""

do {
  opcao = prompt("Escolha uma opção \n Opção 1:Verificar \n Opção 2:Verificar \n Opção 3:Verificar \n Opção 4: Sair")
  // opcao = prompt(
  //       "Senha bem-vindo:\n" +
  //         "\nEscolha uma das opções abaixo:" +
  //         "\n1. Opção um" +
  //         "\n2. Opção dois" +
  //         "\n3. Opção três" +
  //         "\n4. Opção quatro"
  //     );
  switch (opcao) {
    case "1":
      window.alert("Você escolheu a opção 1")
      break;
      case "2":
      window.alert("Você escolheu a opção 2")
      break;
      case "3":
      window.alert("Você escolheu a opção 3")
      break 
      case "4":
        window.alert("Você escolheu a opção 4 ")
        window.alert("Saindo... de novo")
      break   

        default: 
        // window.alert("Encerrando com o default... ")
        
        break;
      }
      
    } while (opcao !== "4") 
window.alert("Saindo... ")

//Over

// let opcao = "";

// do {
//   // obs importante, como não dá para colocar const em while, você coloca (o nome dado a ela = prompt) o resultado será o mesmo

//   opcao = prompt(
//     "Senha bem-vindo:\n" +
//       "\nEscolha uma das opções abaixo:" +
//       "\n1. Opção um" +
//       "\n2. Opção dois" +
//       "\n3. Opção três" +
//       "\n4. Opção quatro"
//   );

//   switch (opcao) {
//     case "1":
//       alert("Você escolheu a opção 1");
//       break;
//     case "2":
//       alert("Você escolheu a opção 2");
//       break;
//     case "3":
//       alert("Você escolheu a opção 3");
//       break;
//     case "4":
//       alert("Você escolheu a opção 4");
//       break;
    
//     default:
//   }
// } while (opcao !== "4");
// alert("Sessão encerrada");
