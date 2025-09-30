import { schedulesDay } from "../schedules/schedules-load";

const inputDate = document.getElementById("date");

inputDate.onchange = () => {
    schedulesDay();
}