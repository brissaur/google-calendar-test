import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
if (!API_BASE_URL) {
  throw new Error('Missing env var REACT_APP_API_BASE_URL');
}

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const fetcher = axios;

export default fetcher;
