/**
 * @typedef {object} Task
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created
 */

export const Task = {}

/**
 * @typedef {A-z | Z-A} Sorting
 */
export const Sorting = {}

/**
 * @typedef {object} Filters
 * @prop {A-z | Z-A} sorting
 */

/**
 * @typedef {State}
 * @prop {'idle' | 'adding'} phase
 * @prop {Record<string, Task>} tasks
 * @prop {Filter} filters
 */

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscribe 
 * @param {State} prev
 * @param {state} next
 * @returns {EmptyFn}
 */

/**
 * @typedef {object} Store
 * @prop {GetState} getState
 * @prop {Subscribe} subscribe
 * @prop {Dispatch} dispatch
 */


























/**
 * @type {Array<State>}
 */

const states = []

/**
 * @return {State}
 */

export const getState = () => {
    return Object.freeze({ ...states[0] })
}

/**
 * @param {Action} action
 */


















export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(prev, action);
    states.unshift(next);

    const handler = subscribers.fo
    subscribers.forEach()
}

/**
 * @param {Subscription} subscription
 */



export const dispatch = () => { 
    const prev = getState()
    const next = reducer(prev, action)

    const handler
    subscribers.forEach()
    states.unshift(next)
}

/**
 * @param {Subscription} subscription
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item !== subscription

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)
    }

    return unsubscribe
}
 