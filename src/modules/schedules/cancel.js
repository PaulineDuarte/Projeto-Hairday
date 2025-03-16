const periods = document.querySelectorAll(".period")


// Gerar o evento de click para cada lista ( manhã, tarde e noite)
periods.forEach((period)=>{

    //Capturar o evento de clique na lista. 
    period.addEventListener("click", (e)=>{
        if(e.target.classList.contains("cancel-icon")){
            const item = e.target.closest("li")
            const {id} = item.dataset
            
            
            if(id){
                const IsConfirm = confirm("Tem certeza que deseja cancelar o agendamento ? ")
            }
        }
    })
})