import {openingHours} from "../../utils/opening-hours"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad ({date , dailySchedules}) {

    hours.innerHTML = ""

    // Obtém a lista de horários ocupados. 
    const unavailableHours = dailySchedules.map((schedule)=>
        dayjs(schedule.when).format("HH:mm")
)

    console.log(unavailableHours)

    const opening = openingHours.map((hour) => {
        //recuperar somente a hora 
        const [scheduleHour] = hour.split(":")

        //Verificar se a hora está no passado 
        const isHourPast = dayjs(date).add(scheduleHour,"hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast

        //define se o horario está disponivel 
        return {
            hour, 
            available,
        }

    })

    // Renderizar os horarios
    opening.forEach(({hour,available}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable" )

        li.textContent = hour

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.appendChild(li)
    })

    //adiciona os horários de clique nos horários disponiveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}