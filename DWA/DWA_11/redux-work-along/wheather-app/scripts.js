///@ts-check

import {subscribe, update, Action} from './store.js'

const handler = (prev, next) => console.log(prev, next) 
const unsubscribe = subscribe(handler)


const htmlHandler = (next, prev) => {
    if (prev.wind.value === next.wind.value) return

    // const div = document.createElement('div')
    // div.innerText = next.wind.value.toString()
    // document.body.appendChild(div)
}
subscribe(htmlHandler)

/**
 * @type {Action}
 */
const customAction = (state)  => {
    return {
        ...state,
        wind:  {
            ...state.wind,
            value: state.wind.value +  19,
        }
    }
}

update(customAction)
