const display_num = document.getElementById("number-display")
const buttons = document.getElementById("buttons")
let operator_clicked = false
let first_num = '';
let second_num = '';
let result = '';
let what_operator;

buttons.addEventListener("click", ({ target }) => {
    if (target.textContent === "clear") {
        display_num.innerHTML = ''
        result = ''
        operator_clicked = false
    } else if (!operator_clicked && !isNaN(target.textContent)) {
        display_num.innerHTML += target.textContent
        first_num += target.textContent
    } else if (!operator_clicked && isNaN(target.textContent) && target.textContent !== "=") {
        operator_clicked = true
        display_num.innerHTML += target.textContent
        what_operator = target.textContent
    } else if (operator_clicked && target.textContent !== '=') {
        display_num.innerHTML += target.textContent
        second_num += target.textContent
    } else if (second_num && target.textContent === '=') {
        switch (what_operator) {
            case "+":
                result = Number.parseInt(first_num) + Number.parseInt(second_num)
                first_num = ''
                second_num = ''
                display_num.innerHTML = result;
            break;
            case "-":
                result = Number.parseInt(first_num) - Number.parseInt(second_num)
                first_num = ''
                second_num = ''
                display_num.innerHTML = result;
            break;
            case "*":
                result = Number.parseInt(first_num) * Number.parseInt(second_num)
                first_num = ''
                second_num = ''
                display_num.innerHTML = result;
            break;
            case "/":
                result = Number.parseInt(first_num) / Number.parseInt(second_num)
                first_num = ''
                second_num = ''
                display_num.innerHTML = result;
            break;
        }
    }
})