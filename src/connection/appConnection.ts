import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
});

export default instance;