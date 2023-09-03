alert("Welcome guys!");

do {
  opcao = prompt(
    "Escolha a forma geometrica para calcular:" +
      "\n1.Triângulo" +
      "\n2.Retângulo" +
      "\n3.Quadrado" +
      "\n4.Trapézio(DECENDENTE)" +
      "\n5.Círculo" +
      "\n6.Sair"
  );

  switch (opcao) {
    case "1":
      baseT = prompt("Informe o tamanho da base");
      alturaT = prompt("informe o tamanho da altura");
      formulaT = (baseT * alturaT) / 2;
      alert("A área é: " + "\n" + formulaT);
      break;
    case "2":
      baseQ = prompt("Informe o tamanho da base");
      alturaQ = prompt("Informe o tamanho da altura");
      formulaQ = alturaQ * baseQ;
      alert("A área é: " + "\n" + formulaQ);
      break;
    case "3":
      ladoQ = prompt("Informe o valor dos lados do quadrado:");
      formulaQuadrado = ladoQ * ladoQ;
      alert("A área é: " + "\n" + formulaQuadrado);
      break;
    case "4":
      baseMaior = parseFloat(prompt("Informe a base do trapezio"));
      baseMenor = parseFloat(prompt("Informe a base menor do trapezio"));
      alturaTZ = prompt("Informe a altura do trapezio");
      FormulaTrapezio = ((baseMaior + baseMenor) * alturaTZ) / 2;
      alert("A área é: " + "\n" + FormulaTrapezio);
      break;
    case "5":
      raio = prompt("Informe o valor do raio");
      pi = 3.14;
      formulaCirculo = pi * (raio * raio);
      alert("A área é: " + "\n" + formulaCirculo);
      break;
    case "6":
      alert("Finalizando...");
      break;
    default:
      alert("Escolha uma opção válida, please");
  }
} while (opcao !== "6");
