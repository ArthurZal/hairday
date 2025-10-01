import dayjs from "dayjs";
import { scheduloNew } from "../../service/schedule-new.js";

const form = document.querySelector("form");
const inputDate = document.getElementById("date");
const inputClientName = document.getElementById("client");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

inputDate.value = inputToday;
inputDate.min = inputToday;

form.onsubmit = async (event) => {
    event.preventDefault();

    try {

        const clientName = inputClientName.value.trim();
        
        if(!clientName) {
            return alert("informa o nome do cliente");
        }

        const hourSelected = document.querySelector(".hour-selected");
        
        if(!hourSelected) {
            return alert("Selecione um horário disponível");
        }

        const [ hour ] = hourSelected.innerText.split(":");

        const when = dayjs(inputDate.value).add(hour, "hour");
        
        const id = new Date().getTime();

        await scheduloNew({
            id,
            clientName,
            when
        })

    } catch (error) {
        alert("Não foi possível concluir o agendamento!");
        console.log(error)
    }

}