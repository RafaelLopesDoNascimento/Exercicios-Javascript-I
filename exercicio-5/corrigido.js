let opcao = "";

do {
  // obs importante, como não dá para colocar const em while, você coloca (o nome dado a ela = prompt) o resultado será o mesmo

  opcao = prompt(
    "Senha bem-vindo:\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1. Opção um" +
      "\n2. Opção dois" +
      "\n3. Opção três" +
      "\n4. Opção quatro" +
      "\n5. Opção Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu encerrar");
      break;
    default:
  }
} while (opcao !== "5");
alert("Sessão encerrada");
