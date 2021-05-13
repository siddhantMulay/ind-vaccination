import { actionTypes } from "./actionTypes";

// Initial state
const initialState = {
  stateSelected: {},
  districts: [],
  districtSelected: {},
  isDrawerOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_STATE: {
      return {
        ...state,
        stateSelected: action.state,
      };
    }

    case actionTypes.SET_DISTRICTS: {
      return {
        ...state,
        districts: action.districts,
      };
    }

    case actionTypes.SELECT_DISTRICT: {
      return {
        ...state,
        districtSelected: action.district,
      };
    }

    case actionTypes.TOGGLE_LANDING_DRAWER: {
      return {
        ...state,
        isDrawerOpen: action.toggle,
      };
    }
    default:
      return state;
  }
};

export default reducer;
