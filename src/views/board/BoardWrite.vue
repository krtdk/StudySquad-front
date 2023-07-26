<template>
 <v-container>
    <div class="board-detail">
      <div class="board-contents">
        <input type="text" v-model="title" class="w3-input w3-border" placeholder="제목을 입력해주세요.">
        <input type="text" v-model="author" class="w3-input w3-border" placeholder="작성자를 입력해주세요." v-if="idx === undefined">
      </div>

      <v-card  class="Quill-card">
        <v-card-text class="Quill-card-text">
            <QuillEditor style="height:600px;" :modules="modules" toolbar="full" />
        </v-card-text>
      </v-card>

      <div class="common-buttons " style="display: flex; justify-content: center;">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div>
    </div>
    <div>
    </div>
  </v-container>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader';


export default {
  name: 'App',
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
  data() {
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      title: '',
      author: '',
      contents: '',
      created_at: '',
      isBold: false,
    }
  },

  methods: {
    /*toggleBold() {
      this.isBold = !this.isBold;
      // Apply style to the selected text
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const selectedText = range.extractContents();
      const span = document.createElement('span');
      span.style.fontWeight = this.isBold ? 'bold' : 'normal';
      span.appendChild(selectedText);
      range.insertNode(span);
      // Adjust cursor position
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    },
    handleInput() {
      // Update the currently typed text
      this.contents = this.$refs.boardContent.innerHTML;
    }, */
    fnGetView() {
      if (this.idx !== undefined) {
        this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
          params: this.requestBody
        }).then((res) => {
          this.title = res.data.title;
          this.author = res.data.author;
          this.contents = res.data.contents;
          this.created_at = res.data.created_at;
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    fnList() {
      delete this.requestBody.idx;
      this.$router.push({
        path: './MentorBoard',
        query: this.requestBody
      });
    },
    fnView(idx) {
      this.requestBody.idx = idx;
      this.$router.push({
        path: './detail',
        query: this.requestBody
      });
    },
    fnSave() {
      let apiUrl = this.$serverUrl + '/MentorBoard';
      this.form = {
        "idx": this.idx,
        "title": this.title,
        "contents": this.contents,
        "author": this.author
      };

      if (this.idx === undefined) {
        // INSERT
        this.$axios.post(apiUrl, this.form)
          .then((res) => {
            alert('글이 저장되었습니다.');
            this.fnView(res.data.idx);
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
      } else {
        // UPDATE
        this.$axios.patch(apiUrl, this.form)
          .then((res) => {
            alert('글이 저장되었습니다.');
            this.fnView(res.data.idx);
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
      }
    }
  }
};
</script>

<style scoped src="../../style/w3.css">
.board-detail {
  display: block;
  height: 100%;
  padding-bottom: 50px;
}

</style>
