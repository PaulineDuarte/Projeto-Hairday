import { apiConfig } from "./api-config.js"

export async function ScheduleCancel({id}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${String(id)}`, {
            method: "DELETE",
        })

        alert('Agendamento cancelado com sucesso!')

    } catch (error) {
        alert('Não foi possível cancelar o agendamento')
        console.error(error)
    }

} 