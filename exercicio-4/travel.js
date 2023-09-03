let turistaName = prompt("Informe o nome do turista:")


let confirmacao = prompt(` ${turistaName} já visitou alguma cidade: Sim/Não`)
cidadeNumber = 0
while (confirmacao === "Sim" || askAgain === "Sim") {
  cidadeNumber += 1
  let cidadesVisitadas = prompt("Informe o nome da cidade:")
  // cidadesVisitadas  += " _ " + cidadesVisitadas + "\n"
askAgain = prompt("Visitou mais alguma cidade ? Sim/Não")
if (askAgain === "Não") {
  window.alert(`O ${turistaName} visitou ${cidadeNumber}`)
  break;
}
}
