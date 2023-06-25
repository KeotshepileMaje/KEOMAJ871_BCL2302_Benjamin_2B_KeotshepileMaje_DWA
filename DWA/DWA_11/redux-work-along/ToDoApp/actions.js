import { Task, Sorting } from './store.js'

/**
 * Adds a task to the store
 * @typedef {object} AddTask
 * @prop {'ADD_TASK'} type
 * @prop {Task} task
 */ 

/**
 * Changes the order in which tasks are sorted
 * @typedef {object} ChangeSort
 * @prop {'CHANGE_SORT'} type
 * @prop {Sorting} sorting
 */

/**
 * Starts  or stops the add process of a task, , depending od what the current phase is
 * @typedef {object} StartAdd
 * @prop {'TOGGLE_ADD'} type 
 */

/**
 * @returns {string}
 */

export const createUniqueId = () => {
    const array = [
        Math.round(Math.random() * 10000000000),
        new Date().getTime(),
        Math.round(Math.random() * 10000000000)
    ]

    return array.join('-')
}

/**
 * @param {object} props
 * @param {string} props.title
 * @returns {AddTask}
 */
export const addTask = (props) => {
    const {title} = props

    return {
        task: {
            created: new Date(),
            id: createUniqueId(),
            title,
        },

        type: 'ADD_TASK'

    }
}












// /** 
//  * Cancels the addinf process of a new task
//  * @typedef {object} CancelAdd
//  * @prop {'CANCEL_ADD'} type
//  */






