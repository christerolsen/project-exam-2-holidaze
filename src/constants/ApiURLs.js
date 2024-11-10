const BASE_URL = "https://v2.api.noroff.dev";

const ENDPOINT = "/holidaze";

export const ApiURLs = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,
  PROFILE: `${BASE_URL}${ENDPOINT}/profiles`,
  BOOKINGS: `${BASE_URL}${ENDPOINT}/bookings`,
  VENUES: `${BASE_URL}${ENDPOINT}/venues`,
};
