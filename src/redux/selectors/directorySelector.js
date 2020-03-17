import { createSelector } from "reselect";

const slectorDirectory = state => state.directory;

export const slectorDirectorySections = createSelector(
  [slectorDirectory],
  e => e.sections
);
