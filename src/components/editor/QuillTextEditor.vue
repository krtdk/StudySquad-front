<template>
  <div class="example">
    <quill-editor
        class="editor"
        ref="myTextEditor"
        :value="content"
        :options="editorOption"
        @editorChange="onEditorChange"
    />
  </div>
</template>

<script>
import hljs from 'highlight.js'
import debounce from 'lodash/debounce'
import { QuillEditor } from '@vueup/vue-quill'

import 'highlight.js/styles/tomorrow.css'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

export default {
  name: 'quill-example-snow',
  title: 'Theme: snow',
  components: {
    QuillEditor
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{'header': 1}, {'header': 2}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'direction': 'rtl'}],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            [{'font': []}],
            [{'color': []}, {'background': []}],
            [{'align': []}],
            ['clean'],
            ['link', 'image', 'video']
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      },
      content: '',
    }
  },
  methods: {
    onEditorChange: debounce(function () {
      this.content = this.$refs.myTextEditor.getHTML();
      console.log(this.content);

      this.$emit('content-update', this.content);
    }, 466),
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.example {
  display: flex;
  flex-direction: column;
  height: 500px;

  .editor {
    height: 40rem;
    overflow: hidden;
  }
}
</style>