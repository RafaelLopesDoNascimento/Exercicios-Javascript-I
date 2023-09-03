const turista = prompt("Olá, qual o seu nome ?");

// criar uma variavel atraves do let para armazenar o nome das cidades e contagens delas obs: variaveis armazenam as informações colocadas

let cidade = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade ? (Sim/Não)");

while (continuar === "sim") {
  let cidade = prompt("Qual o nome da cidade visitada ?");
  cidade += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade ?(Sim/Não)");
}

alert(
  "Turista: " +
    turista +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas: \n" +
    cidade +
    "\nTodas acima"
);

// alert(
//   "O " +
//     turista +
//     " visitou" +
//     "\n" +
//     contagem +
//     " cidades, sendo elas" +
//     "\n" +
//     cidade +
//     "\n"
// );
