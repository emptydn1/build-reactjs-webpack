import types from "../constants/index";

export const toggleCartHidden = () => {
  return {
    type: types.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: types.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: types.REMOVE_ITEM,
    payload: item
  };
};

export const deleteItem = item => {
  return {
    type: types.DELETE_ITEM,
    payload: item
  };
};
