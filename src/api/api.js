import * as ENDPOINTS from "./endpoints";

import { apiRequest } from "./utils";

export const getStateList = () => {
  const url = ENDPOINTS.STATE.GET.LIST;
  return apiRequest(url, "GET");
};

export const stateChange = (value) => {
  const url = ENDPOINTS.DISTRICTS.GET.LIST.replace("{state_id}", value);
  return apiRequest(url, "GET");
};

export const appointments = (districtId, date) => {
  const url = ENDPOINTS.APPOINTMENTS.GET.LIST;
  let apiURL = `${url}?district_id=${districtId}&date=13-05-2021`;

  return apiRequest(apiURL, "GET");
};
