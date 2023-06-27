export const createStore = (reducer) => {
    let state = 0;
    const observers = [];
  
    const subscribe = (observer) => {
        observers.push(observer);
    };

    const unsubscribe = (observer) => {
        const index = observers.indexOf(observer);
        if (index !== -1) {
            observers.splice(index, 1);
        
        }

    };

    const notifyObservers = () => {
        const handler = (observer) => observer(state)
        observers.forEach(handler);
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        notifyObservers();
    };
  
    return {
        subscribe,
        unsubscribe,
        dispatch,
    };
};