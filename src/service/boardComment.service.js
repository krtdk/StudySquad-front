import api from "@/service/api";

class BoardCommentService {
    getBoardComments(boardId) {
        return api.get(`/board/${boardId}/boardcomments`)
            .then(response => {
                return response.data;
            });
    }

    createBoardComment(boardId, createRequest) {
        return api.post(`/board/${boardId}/boardcomment`, createRequest)
            .then(response => {
                return response.data;
            });
    }

    editBoardComment(boardId, boardCommentId, editRequest) {
        return api.patch(`/board/${boardId}/boardcomment/${boardCommentId}`, editRequest)
            .then(response => {
                return response.data;
            });
    }

    deleteBoardComment(boardId, boardCommentId) {
        return api.delete(`/board/${boardId}/boardcomment/${boardCommentId}`)
            .then(response => {
                return response.data;
            })
    }

}

export default new BoardCommentService();