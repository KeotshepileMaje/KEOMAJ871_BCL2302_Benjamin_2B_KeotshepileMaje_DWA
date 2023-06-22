///@ts-check

import {subscribe, update, Action} from './store.js'

const handler = (prev, next) => console.log(prev, next) 
const unsubscribe = subscribe(handler)

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


/**
 * 
 */