import axiosInstance from './api'
import TokenService from './token.service'
import router from '@/router/index'
import axios from "axios";

const setup = (store) => {
    axiosInstance.interceptors.request.use(config => {
            const token = TokenService.getLocalAccessToken();

            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        });

    axiosInstance.interceptors.response.use((res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;

            if (originalConfig.url !== '/login' && err.response) {
                const statusCode = err.response.status;
                const notFoundUserMessage = err.response.data.message === '사용자를 찾을 수 없습니다';

                if ((statusCode === 401 || statusCode === 404 && notFoundUserMessage) &&  !originalConfig._retry) {
                    originalConfig._retry = true;

                    try {
                        const rs = await axios.post('/reissue');
                        const accessToken = rs.headers.get('Authorization');

                        store.dispatch('accessToken', accessToken);
                        TokenService.setAccessToken(accessToken);

                        return axiosInstance(originalConfig);
                    } catch (_error) {
                        TokenService.removeAccessToken();
                        router.push('/SignIn');

                        return Promise.reject(_error);
                    }
                }
            }

            return Promise.reject(err);
        });
};

export default setup;