import { State} from './store.js'
import {Action} from './actions.js'

/**
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                tasks: {
                    [action.task.id]: action.task,
                    ...state.task
                }
            }
        }
        case 'CASE_SORT': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sorting: action.sorting
                }
            }
        }

    }
}
