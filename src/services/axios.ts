import axios from 'axios';

export const eshopApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const pickzApi = axios.create({
  baseURL: 'https://pickz.co/api',
});

eshopApi.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error', {
      url: error.request._url,
      response: error.response.data,
    });
    return Promise.reject(error);
  },
);
