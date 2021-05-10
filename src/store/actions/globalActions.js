import { selectors } from "../selectors";

const { global } = selectors;

export const toggleDarkMode = (toggleDarkMode) => {
  return { type: global.TOGGLE_DARK_MODE, toggleDarkMode };
};
