carName1 = prompt("Insira o nome do primeiro carro:")
carSpeed1 = parseFloat(prompt("Insira a velocidade do primeiro carro:"))
carName2 = prompt("Insira o nome do segundo carro:")
carSpeed2 = parseFloat(prompt("Insira a velocidade do segundo carro:"))

if (carSpeed1 > carSpeed2) {
  window.alert(`${carName1} é mais rapido doque o ${carName2} 
  ${carName1} velocidade: ${carSpeed1}  ${carName2} velocidade: ${carSpeed2}`)
} else if(carSpeed1 < carSpeed2){
  window.alert(`${carName2} é mais rapido doque o ${carName1} 
  ${carName1} velocidade: ${carSpeed1}  ${carName2} velocidade: ${carSpeed2}`)
} else if(carSpeed1 == carSpeed2) {
  window.alert(`${carName1} e ${carName2} tem a mesma velocidade
  ${carName1} velocidade: ${carSpeed1}  ${carName2} velocidade: ${carSpeed2}`)
}