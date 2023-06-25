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

        const unsubscribe = () => {
            const handler = (current) => current !== notify
            const result = notifiers.filter(handler)
            notifiers = result
        }
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        notifyObservers();
    };
     
    const notifyObservers = () => {
        const handler = (observer) => observer(state)
        observers.forEach(handler);
    };
  
    return {
        subscribe,
        unsubscribe,
        dispatch,
    };
};