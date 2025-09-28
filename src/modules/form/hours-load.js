import dayjs from "dayjs";
import { hours } from "../../utils/opening-hours.js"

const ul = document.getElementById("hours")

export function hoursLoad({ date }) {
    const opening = hours.map((hour) => {
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
        
        return {
            hour,
            available: isHourPast,
        }
        
    })

    opening.forEach(({hour, available}) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;
        ul.append(li)
    })

}

