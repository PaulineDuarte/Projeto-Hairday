import { schedulesDay } from "./load"
import { ScheduleCancel } from "../../services/schedules-cancel"

const periods = document.querySelectorAll(".period")

// Gerar o evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    // Capturar o evento de clique na lista
    period.addEventListener("click", async (e) => {
        if(e.target.classList.contains("cancel-icon")) {
            const item = e.target.closest("li")
            const {id} = item.dataset
            
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
                
                if(isConfirm) {
                    try {
                        await ScheduleCancel({id: String(id)})
                        
                        // Recarregar a lista de agendamentos do dia
                        await schedulesDay()
                        alert("Agendamento cancelado com sucesso!")
                        
                    } catch (error) {
                        console.error("Erro ao cancelar agendamento:", error)
                        alert("Erro ao cancelar agendamento. Tente novamente.")
                    }
                }
            } else {
                console.error("ID do agendamento não encontrado")
            }
        }
    })
})