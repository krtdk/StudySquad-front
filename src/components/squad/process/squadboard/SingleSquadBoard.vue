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
              label="댓글을 입력해주세요"/>
        </div>
        <div class="container_body_squad_board_comment_create_button">
          <v-btn
            class="button_style">
            댓글 작성
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import SquadBoardService from "@/service/squadBoard.service";

export default {
  data() {
    return {
      squadId: '',
      squadBoardId: '',
      squadBoard: '',
    }
  },
  created() {
    this.squadId = this.$route.params.squadId;
    this.squadBoardId = this.$route.params.squadBoardId;

    SquadBoardService.getSquadBoard(this.squadId, this.squadBoardId)
        .then(response => {
          this.squadBoard = response.data;
          console.log(this.squadBoard);
        })
        .catch(error => {
          alert(error.response.data.message);
        })
  }
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
</style>