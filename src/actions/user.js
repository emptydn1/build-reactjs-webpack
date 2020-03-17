import types from "../constants/index";

export const setCurrentUser = user => {
  return {
    type: types.SET_CURRENT_USER,
    payload: user
  };
};
