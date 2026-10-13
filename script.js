const display_num = document.getElementById("number-display")
const buttons = document.getElementById("buttons")
let operator_clicked = false
let first_num = '';
let second_num = '';
let result = '';

buttons.addEventListener("click", ({ target }) => {
    if (target.textContent === "clear") {
        display_num.innerHTML = ''
        result = ''
        operator_clicked = false
    } else if (!operator_clicked && !isNaN(target.textContent)) {
        display_num.innerHTML += target.textContent
        first_num += target.textContent
    } else if (!operator_clicked && isNaN(target.textContent) && target.textContent != "=") {
        operator_clicked = true
        display_num.innerHTML += target.textContent
    } else if (operator_clicked) {
        display_num.innerHTML += target.textContent
        second_num += target.textContent
    }
})