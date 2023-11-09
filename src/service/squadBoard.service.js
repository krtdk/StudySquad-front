import api from "@/service/api"

class SquadBoardService {
    getSquadBoard(squadId, squadBoardId) {
        return api.get(`/squad/${squadId}/squadboard/${squadBoardId}`)
            .then(response => {
                return response.data;
            });
    }

    getSquadBoards(squadId) {
        return api.get(`/squad/${squadId}/squadboards`)
            .then(response => {
                return response.data;
            });
    }

    createSquadBoard(squadId, createRequest) {
        return api.post(`/squad/${squadId}/squadboard`, createRequest)
            .then(response => {
                return response.data;
            });
    }
}

export default new SquadBoardService();