import Axios, {InternalAxiosRequestConfig} from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {API_URL} from '@app/config';
import {mockHabits} from '@app/mocks';

function requestInterceptor(config: InternalAxiosRequestConfig) {
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

// Set the api token for all requests whenever user logs in or out
export const setApiToken = (token: string | null) => {
  if (!token) {
    delete axios.defaults.headers.common.Authorization;
    return;
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const message = error.response?.data?.message || error.message;

    console.log('Axios Error:', message);
    // TODO: store errors in some logging service

    return Promise.reject(message);
  },
);

const mock = new MockAdapter(axios, {delayResponse: 1000});

mock.onGet('/api/health').reply(function (config) {
  return [
    200,
    {
      status: 'ok',
      tokenReceived: config.headers!.Authorization,
    },
  ];
});

mock.onGet('/api/habits').reply(function () {
  return [200, mockHabits];
});
