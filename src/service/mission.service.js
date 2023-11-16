import api from "@/service/api";

class MissionService {
    createMission(squadId, missions) {
        return api.post(`/squad/${squadId}/mission`, missions)
            .then(response => {
                return response.data;
            });
    }

    getMissions(squadId) {
        return api.get(`/squad/${squadId}/missions`)
            .then(response => {
                return response.data;
            });
    }
}

export default new MissionService();