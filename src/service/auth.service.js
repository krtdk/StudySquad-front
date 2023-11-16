import api from "@/service/api";
import TokenService from "@/service/token.service";

class AuthService {
    login({email, password}) {
        return api.post('/login', {email, password})
            .then((response) => {
                TokenService.setAccessToken(response.headers.get('Authorization'));

                return response.data;
            });
    }

    logout() {
        return api.post('/logout')
            .then(response => {
                TokenService.removeAccessToken();
                return response;
            })
            .catch(error => {
                return error;
            });
    }

    register({email, password, nickname}) {
        return api.post('/join', {email, password, nickname});
    }
}

export default new AuthService();