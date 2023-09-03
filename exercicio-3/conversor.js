let Valor = parseFloat(prompt(`Insira um valor em metros para ver suas formatação: `))
let change = parseFloat(prompt(`
1: Milímetro(mm)
2: Centímetro(cm)
3: Decímetro(dm)
4: Decâmetro(dam)
5: Hectômetro(hm)
6: Quilômetro(km)
`))



  switch (change) {
    case 1:
      window.alert(`O valor foi convertido para ${Valor * 1000} Mm`)
      break;
      case 2:
        window.alert(`O valor foi convertido para ${Valor * 100} Cm`)
        break;
        case 3:
          window.alert(`O valor foi convertido para ${Valor * 10} Dm`)
          break;
          case 4:
            window.alert(`O valor foi convertido para ${Valor * 0.1} Dam`)
            break;
            case 5:
              window.alert(`O valor foi convertido para ${Valor * 0.01} Hm`)
              break;
              case 6:
                window.alert(`O valor foi convertido para ${Valor * 0.001} Km`)
                break;
  
    default: 
    window.alert("Valor inválido")
      break;
  }


