import { selectors } from "../selectors";

const { global } = selectors;

// Initial state
const initialState = {
  darkMode: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case global.TOGGLE_DARK_MODE: {

      document.documentElement.setAttribute(
        "data-theme",
        `${action.toggleDarkMode ? "dark" : "light"}`
      );

      return {
        ...state,
        darkMode: action.toggleDarkMode,
      };
    }

    default:
      return state;
  }
};

export default globalReducer;
