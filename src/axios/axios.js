// axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
