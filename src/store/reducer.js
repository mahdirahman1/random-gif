const initialState = {
  isRandom: true,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      state.isRandom = !state.isRandom;
      return state;
    default:
      return state;
  }
};

export default pageReducer;
