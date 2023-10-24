<template>
  <v-container class="container">
    <div class="container_header">
      <h2>스쿼드 게시글 생성</h2>
    </div>
    <div class="container_body">
      <div class="container_body_squad_board_title">
        <v-text-field
          label="스쿼드 게시글 이름"
          v-model="this.data.squadBoardTitle"
          variant="solo"/>
      </div>
      <div class="container_squad_board_content">
        <QuillTextEditor
          @content-update="handleContentUpdate"/>
      </div>
      <div class="container_squad_board_create_button">
        <v-btn
            class="button_style"
            @click="handleCreateSquadBoard">
          스쿼드 게시글 생성
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import QuillTextEditor from "@/components/editor/QuillTextEditor.vue";
import SquadBoardService from "@/service/squadBoard.service";
export default {
  components: {
    QuillTextEditor,
  },
  data() {
    return {
      data: {
        squadBoardTitle: '',
        squadBoardContent: '',
      },
      squadId: '',
    }
  },
  methods: {
    handleCreateSquadBoard() {
      try {
        this.squadId = this.$route.params.squadId;

        this.validateCreateRequest();
        SquadBoardService.createSquadBoard(this.squadId, this.data)
            .then(() => {
              this.$router.push(`/squad/${this.squadId}/squadboard`);
            })
            .catch(error => {
              const errorMessage = error.response.data.message;
              alert(errorMessage);

              this.$router.push(`/squad/${this.squadId}`);
            })
      } catch (error) {
        alert(error.message);
      }
    },
    handleContentUpdate(content) {
      this.data.squadBoardContent = content;
    },
    validateCreateRequest() {
      const squadBoardTitle = this.data.squadBoardTitle;
      const squadBoardContent = this.data.squadBoardContent;

      if (squadBoardTitle === '' || squadBoardTitle === undefined) {
        throw new Error('게시글 이름을 작성해주세요');
      }

      if (squadBoardContent === '' || squadBoardContent === undefined || squadBoardContent === '<p><br></p>') {
        throw new Error('설명 글을 작성해주세요');
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container_header {
  padding-left: 10px;
  padding-bottom: 10px;
}

.container_squad_board_create_button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 10px;
}

.button_style {
  background-color: #8580D8F5;
  color: white;
}
</style>