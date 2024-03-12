import axios from 'axios';
import { URI } from '../constants/Constants';

const baseURL = `${URI}api`;

export const publicAPI = axios.create({ baseURL })

export const authAPI = axios.create({
    baseURL,
  });


  authAPI.interceptors.request.use(
    async config => {
        if (!config.headers.Authorization) {
            const access_token = await localStorage.getItem('token');

            if (access_token) {
                config.headers.Authorization = `Bearer ${access_token}`;
            }
        }
        return config;
    },
    error => {

        return Promise.reject(error);
    },
);