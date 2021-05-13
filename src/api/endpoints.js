const BASE_URL = "https://cdn-api.co-vin.in/api/v2/";

/* State */
export const STATE = {
  GET: { LIST: `${BASE_URL}admin/location/states` },
};

/* Districts */
export const DISTRICTS = {
  GET: { LIST: `${BASE_URL}admin/location/districts/{state_id}` },
};

/* Appointments */
export const APPOINTMENTS = {
  GET: {
    LIST: `${BASE_URL}appointment/sessions/public/calendarByDistrict`,
  },
};
