import dayjs from "dayjs";
import { hours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js";

const ul = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    ul.innerHTML = "";

    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))
    console.log(unavailableHours)

    const opening = hours.map((hour) => {
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast;
        
        return {
            hour,
            available,
        }
        
    })

    opening.forEach(({hour, available}) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;

        if(hour === "9:00") {
            hourHeaderAdd("Manhã");
        } else if(hour === "12:00") {
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite");
        }
        ul.append(li)
    })

    hoursClick();
}

function hourHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    ul.append(header);
}

