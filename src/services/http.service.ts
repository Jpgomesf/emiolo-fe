import axios, {type AxiosInstance} from 'axios';

const baseURL = 'http://localhost:3000/api';

const api: AxiosInstance = axios.create({
  baseURL, 
});

export default api;