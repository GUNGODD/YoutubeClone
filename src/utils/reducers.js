



const initialState = {
  isVisible: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};

export default reducer;

