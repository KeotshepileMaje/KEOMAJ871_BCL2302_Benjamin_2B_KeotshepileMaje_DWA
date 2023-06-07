// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const submitButton = document.querySelector("[type='submit']")
const content = document.querySelector('.content')

const calculatedAnswer = (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    const calculated = Math.floor(dividend / divider);

    if (dividend === "" || divider ==="") {
        result.innerText = 'Division not performed. Both values are required in inputs. Try again'
        return
    }
    if (calculated < 0) {
        try{
            throw new Error ('Division not performed. Invalid number provided. Try again') 
        } catch (error) {
            console.error(error)
            result.innerText = error.message

            return
        }   
    }

    if ( isNaN(dividend) || isNaN(divider)) {
        try {
            throw new Error ('Something critical went wrong.');
        } catch (error) {
            console.error(error);
            result.innerText = error.message
            content.style.display = 'none'

            return
        }
    }
   result.innerText = calculated;     
}

form.addEventListener("submit", calculatedAnswer); 