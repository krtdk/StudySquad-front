<template>
    <v-container style="min-height:1000px;">
    <div id="layout">
      <div class="left-section">
        <!-- Button links -->
        <v-btn block router to="/SquadHome" class="left-button">Home</v-btn>
        <v-btn block router to="/SquadMission" class="left-button">Mission</v-btn>
        <v-btn block router to="/SquadBoard" class="left-button purple-button">SquadBoard</v-btn>
        <v-btn block router to="/SquadSummarize" class="left-button">Summarize</v-btn>
      </div>

      <!--------------------------right section-------------------------------------->
      <div class="right-section">
        <v-container style="min-height:1000px;">
          <h2>SQUAD BOARD</h2>
          <h3>MISSION1. 미션제목입니다.</h3>

          <v-card>
         <v-card-text class="text-h5">
            <v-avatar>
              <v-icon>fas fa-user</v-icon>
            </v-avatar>
              Eva Cloud
            </v-card-text>
            <v-card-text style="font-size: 18px; color: grey;">
              about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Photos
            </v-card-text>
            <v-divider/>
          </v-card>
          <v-card>
            <v-card-text style="font-size: 18px">
                Hello! I’m Eva, a product designer at XYZ. I love illustrating, reading and taking photos. You can follow me on Twitter, check out my projects on GitHub, or reach out via Email. This website is made with Framer and uses their CMS to populate the blog. It’s a free customizable starting template, made by Benjamin. You can start a new website project using this starter template by clicking here.
                <br><br><br>
                Framer is an interactive design tool for websites and prototyping. It excels at building landing pages, marketing sites, online campaigns, and much more. It supports you in every part of the design process, from creating mockups to interactive prototypes, but its unique strength is the ability to publish directly from a freeform canvas. It’s incredibly fast, expressive, and free to try.
             </v-card-text>
          </v-card>

          <v-card>
            <v-form v-if="!editMode" @submit.prevent="addPost">
              <div class="d-flex align-center">
                <v-textarea v-model="newPost.body" label="댓글 작성" required rows="2" class="flex-grow-1 mr-2"
                style="height: 70px; white-space:pre; overflow:auto;" enter-is-br></v-textarea>
                <v-btn class="purple-button" type="submit" style="height: 70px;">완료</v-btn>
              </div>
            </v-form>
            <v-form v-else @submit.prevent="saveEdit">
              <div class="d-flex align-center">
                <v-textarea v-model="editedPost.body" label="content" required rows="2" class="flex-grow-1 mr-2"
                  style="height: 70px; white-space:pre; overflow:auto;"></v-textarea>
                <v-btn color="primary" type="submit" style="height: 70px; white-space: pre-wrap;">Save</v-btn>
              </div>
            </v-form>
            <v-divider />

            <v-list>
    <template v-for="(post, index) in posts" :key="index">
      <v-list-item>
        <div class="d-flex align-start flex-column">
          <div class="d-flex align-center">
            <v-avatar>
              <v-icon>fas fa-user</v-icon>
            </v-avatar>
            <div class="text-h5">{{ post.user }}</div>
          </div>
          <div class="ml-2 text-caption">{{ post.timestamp }}</div> <!-- Display timestamp here -->
        </div>
        <div class="d-flex align-center">
          <div class="flex-grow-1">
            <template v-if="!post.editing">
              {{ post.body }}
            </template>
            <template v-else>
              <v-textarea v-model="post.editedBody" label="댓글 수정" required rows="2" style="white-space:pre; overflow:auto;"></v-textarea>
            </template>
          </div>
          <v-list-item-action class="d-flex flex-column">
            <div class="d-flex align-end justify-space-between mr-4 mb-2">
              <div class="d-flex align-center">
                <v-btn
                  v-if="!post.editing"
                  size="x-small"
                  color="primary"
                  icon
                  small
                  @click="likePost(index)"
                >
                  <v-icon small>fas fa-thumbs-up</v-icon>
                </v-btn>
                <span v-if="!post.editing" class="mx-1" style="font-size: 12px;">{{ post.likes }}</span>
              </div>
              <div class="d-flex align-center">
                <v-btn
                  v-if="!post.editing"
                  size="x-small"
                  color="error"
                  icon
                  small
                  @click="dislikePost(index)"
                  class="ml-auto"
                >
                  <v-icon small>fas fa-thumbs-down</v-icon>
                </v-btn>
                <span v-if="!post.editing" class="mx-1" style="font-size: 12px;">{{ post.dislikes }}</span>
              </div>
            </div>
            <div class="d-flex align-end mr-4 mb-2">
              <v-btn size="small" class="purple-button" @click="toggleEdit(index)">
                {{ post.editing ? '저장' : '수정' }}
              </v-btn>
              <v-btn v-if="!post.editing" size="small" color="error" @click="deletePost(index)">
                삭제
              </v-btn>
            </div>
          </v-list-item-action>
        </div>
      </v-list-item>
    </template>
  </v-list>

            <v-divider />
          </v-card>
        </v-container>
      </div>
      <!--------------------------right section-------------------------------------->
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newPost: {
        body: ''
      },
      posts: [
        { user: 'COCO', body: '안녕하세요', likes: 0, dislikes: 0, editing: false, editedBody: '', timestamp: null },
        { user: 'EVA', body: '소통해요', likes: 0, dislikes: 0, editing: false, editedBody: '', timestamp: null },
        { user: 'MUMU', body: '엄......', likes: 0, dislikes: 0, editing: false, editedBody: '', timestamp: null }
      ],
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    addPost() {
      this.posts.push({
        user: 'user',
        body: this.newPost.body,
        likes: 0,
        dislikes: 0,
        editing: false,
        editedBody: '',
        timestamp: new Date().toLocaleString()
      });
      this.newPost.body = '';
      this.snackbarMessage = 'Post added successfully!';
      this.snackbar = true;
    },
    deletePost(index) {
      this.posts.splice(index, 1);
      this.snackbarMessage = 'Post deleted successfully!';
      this.snackbar = true;
    },
    likePost(index) {
      this.posts[index].likes++;
      this.snackbarMessage = '좋아요';
      this.snackbar = true;
    },
    dislikePost(index) {
      this.posts[index].dislikes++;
      this.snackbarMessage = '싫어요';
      this.snackbar = true;
    },
    toggleEdit(index) {
      if (this.posts[index].editing) {
        this.saveEdit(index);
      } else {
        this.startEdit(index);
      }
    },
    startEdit(index) {
      this.posts[index].editing = true;
      this.posts[index].editedBody = this.posts[index].body;
    },
    saveEdit(index) {
      this.posts[index].body = this.posts[index].editedBody;
      this.posts[index].editing = false;
      this.snackbarMessage = 'Post edited successfully!';
      this.snackbar = true;
    }
  }
};
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
.left-button {
  margin-bottom: 50px;
  height: 60px;
  font-size: 18px;
  border-radius: 6px;
}
.right-section {
  width: 85%;
  background-color: #fcfcfc;
}
.purple-button {
  background-color: #8580D8F5 !important;
  color: White !important;
}
</style>
