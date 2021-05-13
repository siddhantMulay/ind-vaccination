import { actionTypes } from "./actionTypes";

export const setStates = (states) => {
  return { type: actionTypes.SET_STATES, states };
};

export const selectState = (state) => {
  return { type: actionTypes.SELECT_STATE, state };
};

export const setDistricts = (districts) => {
  return { type: actionTypes.SET_DISTRICTS, districts };
};

export const selectDistrict = (district) => {
  return { type: actionTypes.SELECT_DISTRICT, district };
};

export const toggleLandingDrawer = (toggle) => {
  return { type: actionTypes.TOGGLE_LANDING_DRAWER, toggle };
};