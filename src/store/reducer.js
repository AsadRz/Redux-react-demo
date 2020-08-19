const INITIAL_STATE = {
  counter: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case action.type:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
