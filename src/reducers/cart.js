import types from "../constants/index";
import { addItemToCart, removeItemToCart } from "../utils/cart";

const InitialState = {
  hidden: true,
  cartItems: []
};

const cart = (state = InitialState, action) => {
  switch (action.type) {
    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(e => e.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default cart;
