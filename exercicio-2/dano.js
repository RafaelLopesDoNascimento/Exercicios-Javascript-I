personagemOneName = prompt("Insira o nome do primeiro personagem:")
personagemOneAtaque = parseFloat(prompt(`Insira o poder de ataque do(a) ${personagemOneName}:`))

personagemTwoName = prompt("Insira o nome do segundo personagem:")
personagemTwoLive = parseFloat(prompt(`Insira a quantidade de vida do(a) ${personagemTwoName}:`))
personagemTwoDefendPower = parseFloat(prompt(`Insira o poder de defesa do(a) ${personagemTwoName}:`))
personagemTwoShield = prompt(`personagem possui escudo: Sim/Não`)




if (personagemOneAtaque > (personagemTwoDefendPower + personagemTwoLive + personagemTwoShield) && personagemTwoShield == "sim") {
  window.alert(`O ${personagemOneName} causou ${personagemOneAtaque - (personagemTwoLive +  personagemTwoDefendPower + 100)}
  `)  
  } else if(personagemOneAtaque > (personagemTwoDefendPower + personagemTwoLive) && personagemTwoShield == "não") {
    window.alert(`O ${personagemOneName} causou ${personagemOneAtaque - (personagemTwoLive +  personagemTwoDefendPower)}
    `)  
  }
  else if(personagemOneAtaque < (personagemTwoDefendPower + personagemTwoLive) && personagemTwoShield == "sim") {
    window.alert(`O ${personagemTwoName} ficou com ${(personagemTwoLive +  personagemTwoDefendPower + 100) - personagemOneAtaque }
    `)  
  }
  else if(personagemOneAtaque < (personagemTwoDefendPower + personagemTwoLive) && personagemTwoShield == "não") {
    window.alert(`O ${personagemTwoName} ficou com ${(personagemTwoLive +  personagemTwoDefendPower) - personagemOneAtaque }
    `)  
  }

 