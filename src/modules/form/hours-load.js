import {openingHours} from "../../utils/opening-hours"
import dayjs from "dayjs"

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

    
}