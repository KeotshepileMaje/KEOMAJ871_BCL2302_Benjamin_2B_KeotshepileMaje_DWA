const MAX_NUMBER = 5
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="substract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('.controls > sl-button')

const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue 

    if (add.disabled === true) {
        add.disabled = false
    }
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true  
        subtract.style.background = 'red'
        throw new Error ("The number can't be greater than 5")
    }
    if (newValue < 5) {
        add.style.background = ''
    }
}

const addHandler = () =>{
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue 

    if (subtract.disabled === true) {
        subtract.disabled = false
        subtract.style.background = 'red'
    } 
    if (newValue>=MAX_NUMBER) {
        add.disabled = true
    }
    if (newValue >= 4) {
        add.style.background = 'red'
        throw new Error ("The number can't be less than 5")
    }
    if (newValue > -5) {
        subtract.style.background = ''
    }
}

const resetHandler = () => {
    number.value = 0
    alert("The counter has been reset")
}
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler)