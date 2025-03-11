import {scheduleFetchByDay}  from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
import {hoursLoad} from "../form/hours-load.js"

//seleciona o input da data
const SelectedDate = document.getElementById("date")

export async function schedulesDay () {
    // obtem a data do input 

    const date = SelectedDate.value

    // Buscar na API agendamentos
    const dailySchedules= await scheduleFetchByDay({date}) 


    //exibir os agendamentos
    schedulesShow({dailySchedules})

    // Rendiriza as horas disponiveis
    hoursLoad({date})
}