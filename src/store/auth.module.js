import AuthService from "@/service/auth.service";

const token = localStorage.getItem('Authorization');
const initialState = token
    ? {status: {loggedIn: true}, token}
    : {status: {loggedIn: false}, token: null};

export const auth = {
    namespace: true,
    state: initialState,
    getters: {
        isLoggedIn(state) {
            return state.status.loggedIn;
        },
        getToken(state) {
            return state.token;
        }
    },
    actions: {
        login({commit}, user) {
            return AuthService.login(user)
                .then(user => {
                        commit('loginSuccess', user);
                        return Promise.resolve(user);
                    },
                    error => {
                        commit('loginFail');
                        return Promise.reject(error);
                    });
        },
        logout({commit}) {
            AuthService.logout()
                .then(() => {
                    commit('logout');
                    return Promise.resolve();
                },
                error => {
                    return Promise.reject(error);
                });
        },
        register({commit}, user) {
            return AuthService.register(user)
                .then(response => {
                        commit('registerSuccess');
                        return Promise.resolve(response.data);
                    },
                    error => {
                        commit('registerFail');
                        return Promise.reject(error);
                    });
        },
        accessToken({commit}, accessToken) {
            commit('accessToken', accessToken);
        }
    },
    mutations: {
        loginSuccess(state, token) {
            state.status.loggedIn = true;
            state.token = token;
        },
        loginFail(state) {
            state.status.loggedIn = false;
            state.token = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.token = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFail(state) {
            state.status.loggedIn = false;
        },
        accessToken(state, accessToken) {
            state.status.loggedIn = true;
            state.token = accessToken;
        },
    }
}