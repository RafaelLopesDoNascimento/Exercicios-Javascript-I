function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triângulo:");
  const altura = prompt("Informe a altura do triângulo:");
  return (base * altura) / 2;
}
function calcularAreaRetangulo() {
  const base = prompt("Informe a base do retângulo:");
  const altura = prompt("Informe a altura do retângulo:");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe a base do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const altura = prompt("Informe a base altura do trapézio:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio da circunferencia:");
  const pi = 3.14;
  return pi * (raio * raio);
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1.Calcular área do triângulo\n" +
      "2.Calcular área do retângulo\n" +
      "3.Calcular área do quadrado\n" +
      "4.Calcular área do trapézio\n" +
      "5.Calcular área do circulo\n" +
      "6.Sair\n"
  );
}

function executar() {
  let = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        calcularAreaRetangulo();
        break;
      case "3":
        calcularAreaQuadrado();
        break;
      case "4":
        calcularAreaTrapezio();
        break;
      case "5":
        calcularAreaCirculo();
        break;
      case "6":
        alert("saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
