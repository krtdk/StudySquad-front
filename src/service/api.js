import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_LOCAL_URI + '/api',
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axios.defaults.baseURL = process.env.VUE_APP_LOCAL_URI + '/api';
axios.defaults.withCredentials = true;

export default instance;