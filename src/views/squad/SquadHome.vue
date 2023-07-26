<template>
    <v-container style="min-height:1000px;">
  <div id="layout">
    <div class="left-section">
      <!-- Button links -->
      <v-btn block router to="/SquadHome" class="left-button purple-button" >Home</v-btn>
      <v-btn block router to="/SquadMission" class="left-button">Mission</v-btn>
      <v-btn block router to="/SquadBoard" class="left-button">SquadBoard</v-btn>
      <v-btn block router to="/SquadSummarize" class="left-button">Summarize</v-btn>
    </div>
    <div class="right-section">
    <v-container style="min-height:1000px;">
        <h2>HOME</h2>
        <v-card>
         <v-card-text class="text-h6">
           속닥속닥
          </v-card-text>
              <v-card-text style="font-size: 18px; color: grey;">
                 안녕하세요 저희 스쿼드는 Java stream을 공부하는 스쿼드 입니다.
              </v-card-text>
            <v-divider/>
          </v-card>
      </v-container>
    </div>
  </div>
  </v-container>
</template>

<script>
export default {
  name: "AppLayout",
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
  color: White !important;
}
</style>
