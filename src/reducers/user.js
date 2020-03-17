import types from "../constants/index";

const InitialState = {
  currentUser: null
};

const user = (state = InitialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default user;
