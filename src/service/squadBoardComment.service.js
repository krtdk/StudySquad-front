import api from "@/service/api"

class SquadBoardCommentService {
    getSquadBoardComments(squadId, squadBoardId) {
        return api.get(`/squad/${squadId}/squadboard/${squadBoardId}/squadboardcomments`)
            .then(response => {
                return response.data;
            });
    }

    createSquadBoardComment(squadId, squadBoardId, createRequest) {
        return api.post(`/squad/${squadId}/squadboard/${squadBoardId}/squadboardcomment`, createRequest)
            .then(response => {
                return response.data;
            });
    }

    editSquadBoardComment(squadId, squadBoardId, squadBoardCommentId, editRequest) {
        return api.patch(`/squad/${squadId}/squadboard/${squadBoardId}/squadboardcomment/${squadBoardCommentId}`, editRequest)
            .then(response => {
                return response.data;
            });
    }

    deleteSquadBoardComment(squadId, squadBoardId, squadBoardCommentId) {
        return api.delete(`/squad/${squadId}/squadboard/${squadBoardId}/squadboardcomment/${squadBoardCommentId}`)
            .then(response => {
                return response.data;
            });
    }
}

export default new SquadBoardCommentService();