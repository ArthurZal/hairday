import { hoursLoad } from "../form/hours-load"
import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day.js" 

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectedDate.value;

    const dailySchedules = await scheduleFetchByDay( {date} )
    console.log(dailySchedules);

    hoursLoad({ date });
}