<template>
    <v-container style="min-height:1000px;">
  <div id="layout">
    <div class="left-section">
      <!-- Button links -->
      <v-btn block router to="/SquadHome" class="left-button " >Home</v-btn>
      <v-btn block router to="/SquadMission" class="left-button ">Mission</v-btn>
      <v-btn block router to="/SquadBoard" class="left-button purple-button">SquadBoard</v-btn>
      <v-btn block router to="/SquadSummarize" class="left-button">Summarize</v-btn>
    </div>
    <div class="right-section">
      <v-container style="min-height:1000px;">
        <h2>SQUAD BOARD</h2>
        <v-textarea
              v-model="BoardTitle"
              label="글 제목"
              outlined
              rows="1"
              class="mb-4"
            ></v-textarea>
        <QuillEditor style="height:450px;" :modules="modules" toolbar="full" />

        <br>
        <div style="display: flex; justify-content: flex-end;">
              <v-btn class="purple-button" >작성하기</v-btn>
        </div>
      </v-container>
    </div>
  </div>
  </v-container>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader';


export default {
  name: "AppLayout",
   data() {
    return {
      BoardTitle: '',
    };
},
  components: {
    QuillEditor
  },
  setup: () => {
  const modules = {
    name: 'imageUploader',
    module: ImageUploader,
    options: {
      upload: file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const url = reader.result;
            console.log('Uploaded:', url);
            resolve(url);
          };
          reader.onerror = () => {
            reject('Upload failed');
          };
          reader.readAsDataURL(file);
        });
      },
    },
  };
  return { modules };
},
}
</script>

<style scoped>
#layout {
  display: flex;
  height: 100%;
}

.left-section {
  width: 15%;
  padding: 1rem;
  border-right: 1px solid #e0e0e0;
}
.left-button{
  margin-bottom: 50px;
  height: 60px; /* 추가 높이 속성 */
  font-size: 18px; /* 글꼴 크기 추가 */
  border-radius: 6px; /* 추가된 모서리 둥근 정도 */
}
.right-section {
  width: 85%;
  background-color: #fcfcfc;
}
.purple-button {
  background-color:#8580D8F5  !important;
  color: White !important;
}
</style>
