import { SHOP_DATA } from "../pages/shop/shop.data";

const InitialState = {
  collections: SHOP_DATA
};

const shop = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shop;
