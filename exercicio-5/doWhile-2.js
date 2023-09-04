let valor = parseFloat(prompt("Qual o seu saldo atual ?"))
let opcao = ""
do {
    opcao = prompt("Saldo: $" + valor + "\n\nEscolha oque gostaria de fazer com o saldo da sua conta:\n" + "\n1. adicionar dinheiro a conta" + "\n2. Resgatar valor da conta" + "\n3. Sair")

    switch (opcao) {
      case "1":
        let add = parseFloat(prompt("Quanto deseja adicionar a sua conta ?"))
        valor = (valor + add)
        break;
        case "2":
          let remove = parseFloat(prompt("Quanto deseja resgatar da sua conta ?"))
          if ((valor - remove) > 0) {
            
            valor = (valor - remove)
            break;
          } else {
            alert("Você não pode retira uma quantidade maior doque a atual")
            break;
          }
        case "3":

       alert("Saindo...")
          break;
      default:
    alert("Valor inválido")
        break;
    }
} while (opcao !== "3");
alert("Ate um outro dia ")

