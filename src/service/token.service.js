import api from "@/service/api";

class TokenService {
    getLocalAccessToken() {
        return localStorage.getItem('Authorization');
    }
    setAccessToken(token) {
        localStorage.setItem('Authorization', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    removeAccessToken() {
        localStorage.removeItem('Authorization');
        api.defaults.headers.common['Authorization'] = null;
    }
}

export default new TokenService();