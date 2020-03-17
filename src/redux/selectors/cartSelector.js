import { createSelector } from "reselect";

const cart = state => state.cart;

export const selectCartItems = createSelector([cart], cart => cart.cartItems);

export const selectCartHidden = createSelector([cart], cart => cart.hidden);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItem => cartItem.reduce((init, e) => init + e.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItem =>
  cartItem.reduce((init, e) => init + e.quantity * e.price, 0)
);
