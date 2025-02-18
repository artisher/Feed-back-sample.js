
const counterValueEl = document.querySelector('.counter_value')
const incButton = document.querySelector(".counter_button--increase");
const decButton = document.querySelector(".counter_button--decrease");
const resetButton = document.querySelector(".counter_reset-button");
const counterEl = document.querySelector(".counter")
const tilteAlert = document.querySelector(".counter_title")

function increaseCounter() {
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;
    if (newValue > 5) {
        newValue = 5
        counterEl.classList.add("counterAlert")
        tilteAlert.innerHTML = "buy permium !!!";
    }

    counterValueEl.textContent = newValue;
}
function decreaseCounter() {
    const currentValue = counterValueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1;
    if (newValue < 0) {
        newValue = 0
    }
    tilteAlert.innerHTML = "Mosi Counter";
    counterEl.classList.remove("counterAlert")
    counterValueEl.textContent = newValue;

}

incButton.addEventListener('click', increaseCounter)
document.addEventListener('keydown', increaseCounter)
decButton.addEventListener('click', decreaseCounter)

resetButton.addEventListener('click', function () {
    tilteAlert.innerHTML = "Mosi Counter";
    counterEl.classList.remove("counterAlert")
    counterValueEl.textContent = 0;
})
