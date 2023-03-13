import axios, {type AxiosInstance} from 'axios';

const baseURL = 'http://localhost:3000';

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;