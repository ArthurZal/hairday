import dayjs from "dayjs";

const form = document.querySelector("form");
const inputDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

inputDate.value = inputToday;
inputDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault();

    console.log("Formulário enviado!")
}