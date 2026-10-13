const display_num = document.getElementById("number-display")
const buttons = document.getElementById("buttons")
const operator_clicked = false

buttons.addEventListener("click", ({ target }) => {
    if (target.textContent === "clear") {
        display_num.innerHTML = ''
    } else if (!operator_clicked && !isNaN(target.textContent)) {
        display_num.innerHTML += target.textContent
    }
})