<template>
  <div class="main-page">
    <!-- Main Image Section -->
    <v-container class="custom-container">
      <v-img src="../assets/Main-Image.png" alt="Main Image" :width="vflex" :height="700" />
    </v-container>

    <!-- Mentor Board Section -->
    <v-container>
      <h2>
        <router-link to="/MentorBoard" class="router-link">
          멘토 구해요
        </router-link>
      </h2>
      <v-card>
        <v-card-text>
          <MentorBoard />
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Mentee Board Section -->
    <v-container>
      <h2><router-link to="/MenteeBoard" class="router-link">
          멘티 구해요
        </router-link>
      </h2>
      <v-card>
        <v-card-text>
          <MenteeBoard/>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Overall Board Section -->
    <v-container>
      <h2><router-link to="/BulletinBoard" class="router-link">
          전체 게시글
        </router-link>
      </h2>
      <v-card>
        <v-card-text>
          <BulletinBoard/>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import MentorBoard from "@/views/board/MentorBoard.vue";
import MenteeBoard from "@/views/board/MenteeBoard.vue";
import BulletinBoard from "@/views/board/BulletinBoard.vue";

export default {
  components: {
    MentorBoard,MenteeBoard,BulletinBoard
  },


};

</script>
<style>
h2 > .router-link {
  text-decoration: none; /* 밑줄 표시 제거 */
  color: inherit; /* 기존 글씨 색상 유지 */
}

/* h2 태그 안에 있는 router-link의 마우스 오버 시 스타일 */
h2 > .router-link:hover {
  text-decoration: none; /* 밑줄 표시 제거 */
  color: inherit; /* 기존 글씨 색상 유지 */
}
</style>