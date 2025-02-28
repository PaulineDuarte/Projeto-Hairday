import {hoursLoad} from "../form/hours-load.js"

//seleciona o input da data
const SelectedDate = document.getElementById("date")

export function schedulesDay () {
    // obtem a data do input 

    const date = SelectedDate.value

    // Rendiriza as horas disponiveis
    hoursLoad({date})
}