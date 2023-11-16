import api from "@/service/api";

class BoardService {
    getBoardsWithSquad(squadId) {
        return api.get(`/squad/${squadId}/boards`)
            .then(response => {
                return response.data;
            });
    }

    getBoard(boardId) {
        return api.get(`/board/${boardId}`)
            .then(response => {
                return response.data;
            });
    }

    getBoards(params) {
        return api.get('/boards', {params})
            .then(response => {
                return response.data;
            });
    }

    isBoardAllowed(squadId) {
        return api.get(`/squad/${squadId}/board/allowed`)
            .then(response => {
                return response.data;
            });
    }

    createBoard(squadId, createRequest) {
        return api.post(`/squad/${squadId}/board`, createRequest)
            .then(response => {
                return response.data;
            });
    }
}

export default new BoardService();
