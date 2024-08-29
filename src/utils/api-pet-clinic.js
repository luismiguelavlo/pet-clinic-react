import axios from 'axios';

export const petClinicApi = axios.create({
  baseURL: 'http://localhost:3000',
});