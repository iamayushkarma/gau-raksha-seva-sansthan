// const API_BASE_URL = 'http://192.168.1.3:5000/api/v1';

// export const API_ENDPOINTS = {
//   donations: `${API_BASE_URL}/donations`,
// };
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api/v1';

export const API_ENDPOINTS = {
  donations: `${API_BASE_URL}/donations`,
  donationOptions: `${API_BASE_URL}/donation-options`,
  videos: `${API_BASE_URL}/videos`,
  createQuery: `${API_BASE_URL}/create-query`,
};
