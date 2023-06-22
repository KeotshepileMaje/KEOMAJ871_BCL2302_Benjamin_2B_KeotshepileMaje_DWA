
/**
 * @typedef {object}
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created
 */

/**
 * 
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

export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item !== subscription

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)
    }

    return unsubscribe
}