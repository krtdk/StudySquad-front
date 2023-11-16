import api from "@/service/api";

class SquadService {
    getRecruitSquads(params) {
        return api.get('/squad/recruit', {params})
            .then(response => {
                return response.data;
            });
    }

    getProcessSquad() {
        return api.get('/squad/process')
            .then(response => {
                return response.data;
            });
    }

    getUserSquad(params) {
        return api.get('/squads', {params})
            .then(response => {
                return response.data;
            });
    }

    joinSquad(squadId, mentor) {
        return api.post(`/squad/${squadId}/join`, mentor)
            .then(response => {
                return response.data;
            });
    }

    createSquad(createRequest) {
        return api.post('/squad', createRequest)
            .then(response => {
                return response.data;
            });
    }
}

export default new SquadService();