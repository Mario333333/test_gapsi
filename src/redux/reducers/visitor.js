const initialState = {
  visitor: {},
};

const visitorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VISITOR":
      return { ...state, visitor: action.visitor };
    default:
      return state;
  }
};

export default visitorReducer;
