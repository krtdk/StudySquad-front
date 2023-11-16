<template>
  <v-container class="container">
    <div class="container_header">
      <h2>게시글 생성</h2>
    </div>
    <div class="container_body">
      <div class="container_body_board_title">
        <v-text-field
          label="게시글 이름"
          v-model="data.title"
          variant="solo"/>
      </div>
      <div class="container_board_content">
        <QuillTextEditor
          @content-update="handleContentUpdate"/>
      </div>
      <div class="container_board_create_button">
        <v-btn
          class="button_style"
          @click="handleCreateBoard">
          게시글 생성
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import QuillTextEditor from "@/components/editor/QuillTextEditor.vue";
import BoardService from "@/service/board.service";

export default {
  components: {
    QuillTextEditor,
  },
  data() {
    return {
      data: {
        title: '',
        content: '',
      },
    }
  },
  methods: {
    handleContentUpdate(content) {
      this.data.content = content;
    },
    handleCreateBoard() {
      try {
        const squadId = this.$route.params.squadId;

        this.validateCreateRequest();
        BoardService.createBoard(squadId, this.data)
            .then(() => {
              this.$router.push(`/squad/${squadId}/summarize`);
            })
            .catch(error => {
              const errorMessage = error.response.data.message;
              alert(errorMessage);
            });
      } catch (error) {
        alert(error.message);
      }
    },
    validateCreateRequest() {
      const title = this.data.title;
      const content = this.data.content;

      if (title === '' || title === undefined) {
        throw new Error('게시글 이름을 작성해주세요');
      }

      if (content === '' || content === undefined || content === '<p><br></p>') {
        throw new Error('설명 글을 작성해주세요');
      }
    },
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

.container_board_create_button {
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