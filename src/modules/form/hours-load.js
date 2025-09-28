import dayjs from "dayjs";
import { hours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
    const opening = hours.map((hour) => {
        const [scheduleHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());
        
        return {
            hour,
            available: isHourPast,
        }
        
    })

    console.log(opening)
}