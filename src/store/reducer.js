const INITIAL_STATE = {
  counter: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREEMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREEMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      };

    default:
      return state;
  }
};
