const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo ao cadastro de imoveis\n" +
      "Total de imoveis: " +
      imoveis.length +
      "\n\nEscolha uma opção: \n1. Novo imovel \n2. Lista de imoveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt(
        "Informe o nome do proprietario do imovel: "
      );
      imovel.quartos = prompt("Quantos quartos possui na casa: ");
      imovel.banheiro = prompt("Quantos banheiros possui na casa: ");
      imovel.garagem = prompt("O imovel possui garam ? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imovel ?\n" +
          "\nProprietario: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiro: " +
          imovel.banheiro +
          "\nPossui garagem ? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
      }

      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imovel " +
            (i + 1) +
            "\nProprietario: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiro +
            "\nPossui garagem ? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
