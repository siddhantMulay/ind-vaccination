import * as ENDPOINTS from "./endpoints";

import { apiRequest } from "./utils";

export const stateChange = (value) => {
  const url = ENDPOINTS.vaccination.POST.LIST;
  return apiRequest(url, "POST", { method: "getDistricts", id: value });
};
