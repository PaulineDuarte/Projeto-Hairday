import dayjs from "dayjs"


const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o  input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


// carregar a data atual e define a data minima como sendo a atual
selectedDate.value =inputToday

selectedDate.min = inputToday

form.onsubmit = (e) => {
    e.preventDefault()


    try {
        //recuperando o nome do cliente 
        const name = clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente")
        }

        // recuperar o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        // recuperar o horario selecionado
        if(!hourSelected){
            return alert("Selecione a hora")
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour,"hour")

        //Gera um ID
        const id = new Date().getTime()

        console.log ({
            id,
            name,
            when
        })
        
    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}