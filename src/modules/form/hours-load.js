import {openingHours} from "../../utils/opening-hours"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad ({date}) {

    const opening = openingHours.map((hour) => {
        //recuperar somente a hora 
        const [scheduleHour] = hour.split(":")

        //Verificar se a hora está no passado 
        const isHourPast = dayjs(date).add(scheduleHour,"hour").isAfter(dayjs())

        //define se o horario está disponivel 
        return {
            hour, 
            availabe : isHourPast
        }

    })

    // Renderizar os horarios
    opening.forEach(({hour,availabe}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(availabe ? "hour-available" : "hour-unavailable" )

        li.textContent = hour

        hours.appendChild(li)
    })
}