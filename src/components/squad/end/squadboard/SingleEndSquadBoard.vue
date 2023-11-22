<template>
  <v-container class="container">
    <div class="container_header">
      <div class="container_header_title">
        <h1>
          SQUAD BOARD - MISSION {{ squadBoard.missionSequence + 1 }}
        </h1>
      </div>
      <div class="container_header_squad_board">
        <div class="container_header_squad_board_title">
          <h2>
            {{ squadBoard.squadBoardTitle }}
          </h2>
        </div>
        <div class="container_header_squad_board_creator">
          <p>작성자: {{ squadBoard.creator }}</p>
        </div>
      </div>
    </div>
    <div class="container_divider">
      <v-divider/>
    </div>
    <div class="container_body">
      <div class="container_body_squad_board_content"
           v-html="squadBoard.squadBoardContent">
      </div>
      <div class="container_divider">
        <v-divider/>
      </div>
      <div class="container_body_squad_board_comment">
        <div class="container_body_squad_board_comment_text_field">
          <v-text-field
              variant="underlined"
              v-model="squadBoardCommentRequest"
              label="댓글을 입력해주세요"/>
        </div>
        <div class="container_body_squad_board_comment_create_button">
          <v-btn
              @click="handleCreateSquadBoardComment"
              class="button_style">
            댓글 작성
          </v-btn>
        </div>
      </div>
      <div class="container_body_squad_board_comment_info"
           v-for="index in squadBoardComment"
           :key="index.squadBoardCommentId">
        <div class="comment_info_header">
          <div class="comment_info_header_creator">
            <h2>
              {{ index.creator }}
            </h2>
          </div>
          <div class="comment_info_header_create_at">
            {{ this.parseCreateAt(index.createAt) }}
          </div>
        </div>
        <div class="comment_info_body"
             v-if="!index.isEditing">
          {{ index.squadBoardCommentContent }}
        </div>
        <div class="comment_info_body"
             v-else>
          <v-textarea
              variant="solo"
              v-model="editData"
          >
          </v-textarea>
          <div class="edit_button">
            <v-btn
                class="button_style"
                @click="handleEditSquadBoardComment(index.squadBoardCommentId)">
              수정 완료
            </v-btn>
          </div>
        </div>
        <div class="comment_edit_and_delete">
          <div class="comment_edit"
               @click="changeEditField(index.squadBoardCommentId)">
            수정
          </div>
          <div class="comment_delete"
               @click="handleDeleteSquadBoardComment(index.squadBoardCommentId)">
            삭제
          </div>
        </div>
        <v-divider/>
      </div>
    </div>
  </v-container>
</template>

<script>
import SquadBoardService from "@/service/squadBoard.service";
import SquadBoardCommentService from "@/service/squadBoardComment.service";

export default {
  data() {
    return {
      squadId: '',
      squadBoardId: '',
      squadBoard: '',
      squadBoardComment: [],
      squadBoardCommentRequest: '',
      isEditing: false,
      editData: '',
    }
  },
  created() {
    this.squadId = this.$route.params.squadId;
    this.squadBoardId = this.$route.params.squadBoardId;

    SquadBoardService.getSquadBoard(this.squadId, this.squadBoardId)
        .then(response => {
          this.squadBoard = response.data;
          this.handleGetSquadBoardComment();
          this.editData = '';
        })
        .catch(error => {
          alert(error.response.data.message);
        });
  },
  methods: {
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
      return new Intl.DateTimeFormat('ko-KR', options).format(date)
    },
    handleCreateSquadBoardComment() {
      SquadBoardCommentService.createSquadBoardComment(this.squadId, this.squadBoardId, this.squadBoardCommentRequest)
          .then(() => {
            this.handleGetSquadBoardComment();
            this.squadBoardCommentRequest = '';
          })
          .catch(error => {
            alert(error.response.data.message);
          });
    },
    handleDeleteSquadBoardComment(squadBoardCommentId) {
      SquadBoardCommentService.deleteSquadBoardComment(this.squadId, this.squadBoardId, squadBoardCommentId)
          .then(() => {
            this.handleGetSquadBoardComment();
          })
          .catch(error => {
            alert(error.response.data.message);
          });
    },
    handleEditSquadBoardComment(squadBoardCommentId) {
      SquadBoardCommentService.editSquadBoardComment(this.squadId, this.squadBoardId, squadBoardCommentId, this.editData)
          .then(() => {
            this.handleGetSquadBoardComment();
          })
          .catch(error => {
            alert(error.response.data.message);
          })
    },
    handleGetSquadBoardComment() {
      SquadBoardCommentService.getSquadBoardComments(this.squadId, this.squadBoardId)
          .then(response => {
            this.squadBoardComment = response.data;
            this.squadBoardComment.forEach(item => {
              item.isEditing = false;
            });
          });
    },
    changeEditField(squadBoardCommentId) {
      this.squadBoardComment.forEach(item => {
        if (item.squadBoardCommentId === squadBoardCommentId) {
          item.isEditing = !item.isEditing;

          if (item.isEditing) {
            this.editData = item.squadBoardCommentContent;
          } else {
            this.editData = '';
          }
        } else {
          item.isEditing = false;
        }
      })
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container_header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.container_header_title {
  padding-bottom: 20px;
}

.container_header_squad_board {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 5px;
  width: 100%;
}

.container_header_squad_board_creator {
  font-size: 11px;
}

.container_divider {
  padding-bottom: 10px;
}

.container_body_squad_board_content {
  min-height: 400px;
}

.container_body_squad_board_content >>> ul {
  padding-left: 30px;
}

.container_body_squad_board_content >>> ol {
  padding-left: 30px;
}

.edit_button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.container_body_squad_board_comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
}

.container_body_squad_board_comment_text_field {
  width: 100%;
}

.container_body_squad_board_comment_create_button {
  padding-left: 10px;
  height: 50px;
}

.button_style {
  background-color: #8580D8F5;
  color: white;
}

.container_body_squad_board_comment_info {
  display: flex;
  flex-direction: column;
}

.comment_info_header {
  padding-bottom: 10px;
}

.comment_info_header_create_at {
  font-size: 11px;
}

.comment_info_body {
  padding-bottom: 20px;
}

.comment_edit_and_delete {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 10px;
  font-size: 12px;
}

.comment_edit:hover {
  color: #8580D8F5;
  cursor: pointer;
}

.comment_delete:hover {
  color: #8580D8F5;
  cursor: pointer;
}

.comment_delete {
  padding-left: 10px;
}
</style>
