import { createSelector } from "reselect";

const user = state => state.user;

export const selectorCurrentUser = createSelector(
  [user],
  user => user.currentUser
);
