export function hoursClick() {

    const availableHours = document.querySelectorAll(".hour-available")

    availableHours.forEach((hour) => {
        hour.addEventListener("click", (selectedElement) => {
            availableHours.forEach((item)=> {
                item.classList.remove("hour-selected")
            })

            selectedElement.target.classList.add("hour-selected")
        })
    })
}