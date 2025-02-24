import dayjs from "dayjs"


const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para formatar o  input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


// carregar a data atual e define a data minima como sendo a atual
selectedDate.value =inputToday

selectedDate.min = inputToday

form.onsubmit = (e) => {
    e.preventDefault()
}