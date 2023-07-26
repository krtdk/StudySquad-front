<template>
    <v-container style="min-height:1000px;">
  <div id="layout">
    <div class="left-section">
      <!-- Button links -->
      <v-btn block router to="/SquadHome" class="left-button " >Home</v-btn>
      <v-btn block router to="/SquadMission" class="left-button purple-button">Mission</v-btn>
      <v-btn block router to="/SquadBoard" class="left-button">SquadBoard</v-btn>
      <v-btn block router to="/SquadSummarize" class="left-button">Summarize</v-btn>
    </div>
    <div class="right-section">
        <v-container style="min-height:1000px;">
        <h2>MISSON</h2>
        <v-card-title>미션1</v-card-title>

               <v-textarea
              v-model="missionTitle"
              label="Mission Title"
              outlined
              rows="1"
              class="mb-4"
            ></v-textarea>
            <v-textarea
              v-model="missionDetail"
              label="Mission Detail"
              outlined
              rows="10"
            ></v-textarea>
            <div style="display: flex; justify-content: flex-end;">
              <v-btn class="purple-button" >미션 수정하기</v-btn>
                &nbsp;
              <v-btn class="purple-button" >미션 생성하기</v-btn>
            </div>
        </v-container>
    </div>

  </div>
  </v-container>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {
      missionTitle: '',
      missionDetail: '',
    };
},
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
