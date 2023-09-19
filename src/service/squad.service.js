import api from "@/service/api";

class SquadService {
    getRecruitSquads(params) {
        return api.get('/squad/recruit', {params})
            .then(response => {
                console.log(response);
                return response.data;
            });
    }

    joinSquad(squadId, mentor) {
        return api.post(`/squad/${squadId}/join`, mentor)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }
}

export default new SquadService();