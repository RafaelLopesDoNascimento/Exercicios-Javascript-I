const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += "( " + vaga.candidatos.lenght + " candidatos)\n";
    return textoFinal;
  }, "");
}

alert(vagasEmTexto);

function novaVaga() {
  const nome = prompt("Informe um nome para vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite para a vaga: (dd/mm/aaaa)"
  );

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações ?\n" +
      "Nome: " +
      nome +
      "\nDescriçao: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada.");
  }
}
// O || significa 'Ou'

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:");
  if (indice >= vagas.lenght || indice < 0) {
    alert("Índice inválido");
    return;
  }
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.lenght +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome seu nome: ");
  const indice = prompt("Informe o índice da vaga que quwer se inscrever: ");
  const vaga = vagas[indice];

  const confirmacao = confirm();
  {
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      "?\bn" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite;

    if (confirmacao) {
      vaga.candidatos.push(candidato);
      alerta("Inscrição realizada.");
    }
  }

  function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ");
    const vaga = vagas[indice];

    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " +
        indice +
        "?\n" +
        "Nome: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dataLimite
    );

    if (confirmacao) {
      vagas.splice(indice, 1);
      alert("Vaga excluída.");
    }
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolher uma das opções:" +
      "\n1. Listar vagas disponíveis" +
      "\n2 Criar uma nova vaga." +
      "\n3. Visualizar uma vaga " +
      "\n4. Inscrever candidato" +
      "\n5. Excluir uma Vaga" +
      "\n6. Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
