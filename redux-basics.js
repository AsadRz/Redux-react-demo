/*
 /*
  **** Redux Description Using Reducers/Store/Action/Subscription
 *
	We Initialize the state with some default Value
	then we create reducer that takes the state and actions
	as an argument then we will create switch to see type of the
	action and along the type we define code what to return
	when this type of action occurs using Switch then we have to
	create a store that takes rootReducer as an argument and we can
	see the state using state.getState() function

	------------------ Action ---------------------------
	We can dispatch the actions using store.dispatch() function that
	takes type as argument and the payload if it has any

	----------------- Subscription ------------------------------
	we have store.subscribe() method to notify whenever the global
	state changes
*/

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store

const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching actions
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
