import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}) {  
    try {
        // Fazer a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)


        //Converte para Json
        const data = await response.json()

        //Filtra os agendamentos pelo dia selecionado
        const dailySchedules=data.filter((schedule) => dayjs(date).isSame(schedule.when , "day")

        )

        return dailySchedules
        
    } catch (error) {
        console.log(error); 
        alert("Não foi possível buscar os agendamentos dos dias selecionados")
        
    }
    
}