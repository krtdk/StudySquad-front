<template>
  <v-container class="container">
    <div class="container_header">
      <div class="container_header_squad_name">
        <h1>{{ board.squadName }}</h1>
      </div>
    </div>
    <div class="container_board_info">
      <div class="container_board_info_with_squad">
        <div class="container_body_info_category_name">
          <v-chip
              class="ma-2 chip_font_bold"
              color="secondary"
              draggable>
            {{ board.categoryName }}
          </v-chip>
        </div>
        <div class="container_body_info_board_title">
          <h2>{{ board.boardTitle }}</h2>
        </div>
      </div>
      <div class="container_body_info_creator">
        작성자: {{ board.creator }}
      </div>
    </div>
    <div class="container_divider">
      <v-divider/>
    </div>
    <div class="container_board_content">
      <div class="container_board_mission_info">
        <div class="container_board_mission_info_sequence">
        </div>
        <div class="container_board_mission_info_data">
          <v-card>
            <v-card-title>
              MISSION {{ board.missionSequence + 1 }}
            </v-card-title>
            <v-card-text>
              <v-icon color="info" icon="mdi:mdi-check-circle"/>
              {{ board.missionTitle }}
            </v-card-text>
          </v-card>
        </div>
        <div class="container_board_content_info"
             v-html="board.boardContent">
        </div>
      </div>
    </div>
    <div class="container_divider">
      <v-divider/>
    </div>
    <div class="container_board_comment">
      <div class="container_body_board_comment_text_field">
        <v-text-field
            variant="underlined"
            v-model="boardCommentRequest"
            label="댓글을 입력해주세요"/>
      </div>
      <div class="container_body_board_comment_create_button">
        <v-btn
            class="button_style"
            @click="handleCreateBoardComment">
          댓글 작성
        </v-btn>
      </div>
    </div>
    <div class="container_body_board_comment_info"
         v-for="index in boardComment"
         :key="index.boardCommentId">
      <div class="board_comment_info_header">
        <div class="board_comment_info_header_creator">
          <h2>
            {{ index.creator }}
          </h2>
        </div>
        <div class="board_comment_info_header_create_at">
          {{ this.parseCreateAt(index.createAt) }}
        </div>
      </div>
      <div class="board_comment_info_body"
           v-if="!index.isEditing">
        {{ index.boardCommentContent }}
      </div>
      <div class="board_comment_info_body"
           v-else>
        <v-textarea
            variant="solo"
            v-model="editData"/>
        <div class="edit_button">
          <v-btn
            class="button_style"
            @click="handleEditBoardComment(index.boardCommentId)">
            수정 완료
          </v-btn>
        </div>
      </div>
      <div class="board_comment_edit_and_delete">
        <div class="board_comment_edit"
             @click="changeEditField(index.boardCommentId)">
          수정
        </div>
        <div class="board_comment_delete"
             @click="handleDeleteBoardComment(index.boardCommentId)">
          삭제
        </div>
      </div>
      <div class="container_divider">
        <v-divider/>
      </div>
    </div>
  </v-container>
</template>

<script>
import BoardService from "@/service/board.service";
import BoardCommentService from "@/service/boardComment.service";

export default {
  data() {
    return {
      board: '',
      boardComment: [],
      boardId: '',
      boardCommentRequest: '',
      isEditing: false,
      editData: '',
    }
  },
  created() {
    this.boardId = this.$route.params.boardId;

    BoardService.getBoard(this.boardId)
        .then(response => {
          this.board = response.data;
          this.handleGetBoardComments();
        })
        .catch(error => {
          alert(error.response.data.message);
        });
  },
  methods: {
    handleGetBoardComments() {
      BoardCommentService.getBoardComments(this.boardId)
          .then(response => {
            this.boardComment = response.data;
            this.boardComment.forEach(item => {
              item.isEditing = false;
            });
          });
    },
    handleCreateBoardComment() {
      BoardCommentService.createBoardComment(this.boardId, this.boardCommentRequest)
          .then(() => {
            this.handleGetBoardComments();
            this.boardCommentRequest = '';
          })
          .catch(error => {
            alert(error.response.data.message);
          });
    },
    handleEditBoardComment(boardCommentId) {
      BoardCommentService.editBoardComment(this.boardId, boardCommentId, this.editData)
          .then(() => {
            this.handleGetBoardComments();
          })
          .catch(error => {
            alert(error.response.data.message);
          })
    },
    handleDeleteBoardComment(boardCommentId) {
      BoardCommentService.deleteBoardComment(this.boardId, boardCommentId)
          .then(() => {
            this.handleGetBoardComments();
          })
          .catch(error => {
            alert(error.response.data.message);
          })
    },
    changeEditField(boardCommentId) {
      this.boardComment.forEach(item => {
        if (item.boardCommentId === boardCommentId) {
          item.isEditing = !item.isEditing;

          if (item.isEditing) {
            this.editData = item.boardCommentContent;
          } else {
            this.editData = '';
          }
        } else {
          item.isEditing = false;
        }
      });
    },
    parseCreateAt(createAt) {
      const date = new Date(createAt);
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      return new Intl.DateTimeFormat('ko-KR', options).format(date);
    }
  }
}
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container_divider {
  padding-top: 10px;
  padding-bottom: 10px;
}

.container_board_info {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
}

.container_body_info_creator {
  display: flex;
  flex-direction: row;
  font-size: 10px;
  padding-bottom: 4px;
}

.container_board_info_with_squad {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container_board_content {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  min-height: 400px;
}

.container_board_mission_info_data {
  padding-bottom: 15px;
}

.container_board_comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
}

.container_body_board_comment_text_field {
  width: 100%;
}

.container_body_board_comment_create_button {
  padding-left: 10px;
  height: 50px;
}

.button_style {
  background-color: #8580D8F5;
  color: white;
}

.container_body_board_comment_info {
  display: flex;
  flex-direction: column;
}

.board_comment_info_header {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.board_comment_info_header_create_at {
  font-size: 11px;
}

.board_comment_info_body {
  padding-bottom: 20px;
}

.board_comment_edit_and_delete {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 10px;
}

.board_comment_edit {
  padding-left: 10px;
}

.board_comment_edit:hover {
  color: #8580D8F5;
  cursor: pointer;
}

.board_comment_delete {
  padding-left: 10px;
}

.edit_button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.board_comment_delete:hover {
  color: #8580D8F5;
  cursor: pointer;
}
</style>