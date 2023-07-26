<template>
    <v-container>
  <div id="layout">
    <div class="left-section">
      <!-- Button links -->
      <v-btn block router to="/SquadHome" class="left-button">Home</v-btn>
      <v-btn block router to="/SquadMission" class="left-button">Mission</v-btn>
      <v-btn block router to="/SquadBoard" class="left-button">SquadBoard</v-btn>
      <v-btn block router to="/SquadSummarize" class="left-button">Summerize</v-btn>
    </div>
    <div class="right-section">
      <router-view />
    </div>
  </div>
  </v-container>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
  return {
    isPurpleButton: true
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
  color: black !important;
}
</style>
