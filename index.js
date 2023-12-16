let departureDateEntry = moment("Digite a data de partida(formato dd/mm/yyyy)")

let departureDate = moment(departureDateEntry, "dd/mm/yyyy")

let today = moment() 

let dateDiff = today - departureDate 

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n 1- Segundos \n2- Minutos \n3- Horas \n4- Dias")

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 100)
    alert("Tempo de voo:" + secondsOfDeparture + "Segundos")
} else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 100 / 60)
    alert("Tempo de voo:" + minutesOfDeparture + "Minutos")
} else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round (dateDiff / 1000 /3600)
    alert("Tempo de voo:" + hoursOfDeparture + "Horas")
} ekse undefined(chosenOption =="4") {
    let daysOfDeparture = Math.round (dateDiff / 1000 / 3600 / 24)
    alert("Tempo de voo:" + daysOfDeparture + "Dias")
} else {
    alert("Opção invalida")
}
