export const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'RESET':  return state = 0;
    }
};
