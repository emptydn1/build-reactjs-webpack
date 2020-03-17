const findItem = (state, item) => {
  return state.find(e => e.id === item.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (findItem(cartItems, cartItemToAdd)) {
    return cartItems.map(e =>
      e.id === cartItemToAdd.id ? { ...e, quantity: e.quantity + 1 } : e
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemToAdd) => {
  if (findItem(cartItems, cartItemToAdd).quantity === 1) {
    return cartItems.filter(e => e.id !== cartItemToAdd.id);
  }
  return cartItems.map(e =>
    e.id === cartItemToAdd.id ? { ...e, quantity: e.quantity - 1 } : e
  );
};
