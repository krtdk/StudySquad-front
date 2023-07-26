<!-- CreatePost.vue -->
<template>
  <div class="create-post">
    <h2>게시글 작성</h2>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" v-model="post.title" required />
      </div>
      <div class="form-group">
        <label for="content">본문</label>
        <textarea id="content" v-model="post.content" rows="10" required></textarea>
      </div>
      <button type="submit" class="submit-btn">게시글 작성</button>
    </form>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },
  emits: ['new-post'], // 이벤트를 이용해 부모에 데이터 전달
  methods: {
    submitPost() {
      if (!this.post.title || !this.post.content) {
        alert('제목과 본문이 모두 입력되어야 합니다.');
      } else {
        this.$emit('new-post', { ...this.post });
        this.post.title = '';
        this.post.content = '';
      }
    },
  },
};
</script>

<style scoped>
.create-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input[type="text"],
textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 12px;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
}

button.submit-btn {
  background-color:#3279d3;
  color: white;
  border: none;
  display: inline-block;
  font-size: 16px;
  text-align: center;
  padding: 12px 24px;
  text-decoration: none;
  cursor:pointer;
}

button.submit-btn:hover {
  background-color:#1c5673;
}
</style>
