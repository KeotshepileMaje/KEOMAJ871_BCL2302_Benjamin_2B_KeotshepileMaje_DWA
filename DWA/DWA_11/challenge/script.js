import { createStore } from './store.js';
import { increment, decrement, reset} from './action.js';
import { reducer } from './reducer.js';

const globalStore = createStore(reducer);

const createObserver = () => (newState) => {
    console.log(`Count`, newState);
};

const observer = createObserver()

globalStore.subscribe(observer);

globalStore.dispatch(increment());
globalStore.dispatch(increment());
globalStore.dispatch(decrement());
globalStore.dispatch(reset());

globalStore.unsubscribe(observer)

globalStore.dispatch(increment());
globalStore.dispatch(increment());
globalStore.dispatch(decrement());
globalStore.dispatch(reset());

















// // import { add } from "./action.js";

// // console.log(add())

// const MAX_NUMBER = 5
// const MIN_NUMBER = -5;
// const STEP_AMOUNT = 1;

// const number = document.querySelector('[data-key="number"]')
// const subtract = document.querySelector('[data-key="substract"]')
// const add = document.querySelector('[data-key="add"]')

// const subtractHandler = () => {
//     const newValue = parseInt(number.value) - STEP_AMOUNT
//     number.value = newValue 

//     if (add.disabled === true) {
//         add.disabled = false
//     }
//     if (newValue <= MIN_NUMBER) {
//         subtract.disabled = true  
//         subtract.style.background = 'red'
//     }
//     if (newValue < 5) {
//         add.style.background = ''
//     }
// }

// const addHandler = () =>{
//     const newValue = parseInt(number.value) + STEP_AMOUNT
//     number.value = newValue 

//     if (subtract.disabled === true) {
//         subtract.disabled = false
//         subtract.style.background = 'red'
//     } 
//     if (newValue>=MAX_NUMBER) {
//         add.disabled = true
//     }
//     if (newValue > -5) {
//         subtract.style.background = ''
//     }
//     if (newValue >= 4) {
//         add.style.background = 'red'
//     }
// }
// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);