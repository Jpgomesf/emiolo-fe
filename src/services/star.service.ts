import axios, {type AxiosInstance} from 'axios';

const baseURL = 'https://swapi.dev/api/';

const api: AxiosInstance = axios.create({
  baseURL, 
});

export default api;