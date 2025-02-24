///////// API SERVICE ///////

// mastering.js

import axios from 'axios';

const apiUrl = 'https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc';

// Create an Axios instance with base configuration
const apiClient = axios.create({
  baseURL: apiUrl, // Ganti dengan URL API Anda
  timeout: 10000, // Timeout dalam milidetik
});

// Tambahkan Header dan Konfigurasi CORS
apiClient.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['accept'] = 'application/json';
    config.headers['x-api-key'] = process.env.REACT_APP_APIKEY;
    return config;
  },
  (error) => Promise.reject(error)
);

// Tangani response
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error('Error Response:', error.response.data);
    } else if (error.request) {
      console.error('No Response Received:', error.request);
    } else {
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Fungsi untuk mendapatkan nama Employee
apiClient.getDataInformation = async () => {
    return apiClient.get('/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc');
  };  

// // Fungsi untuk mendapatkan biodata Employee
// export const getBiodataEmployee = async () => {
//   return apiClient.get('/employee/biodata'); // Ganti '/employee/biodata' dengan endpoint API Anda
// };

// // Fungsi untuk mendapatkan nilai Employee
// export const getNilaiEmployee = async () => {
//   return apiClient.get('/employee/nilai'); // Ganti '/employee/nilai' dengan endpoint API Anda
// };

export default apiClient;