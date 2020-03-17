import { createSelector } from "reselect";

const selectorShop = state => state.shop;

export const selectorShopCollections = createSelector(
  [selectorShop],
  e => e.collections
);

export const selectorShopDirectoryCollection = collectionUrl =>
  createSelector([selectorShopCollections], e =>
    e.filter(x => x.title.toLowerCase() === collectionUrl.toLowerCase())
  );
