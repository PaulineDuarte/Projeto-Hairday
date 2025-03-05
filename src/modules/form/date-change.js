import {schedulesDay} from "../schedules/load.js"

// Selecionar o input da data
const selectedDate = document.getElementById("date")

// Recarregar a lista de horários quando o input da data mudar.

selectedDate.onchange = ()  => schedulesDay()


