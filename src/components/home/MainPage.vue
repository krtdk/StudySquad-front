<template>
  <div class="main-page">
    <v-container class="custom-container">
      <v-img src="../../assets/Main-Image.png" alt="Main Image" :height="700" />
    </v-container>
    <v-container>
      <h2>멘토 구해요</h2>
      <v-card>
        <v-card-text>
          <SquadRecruitTable :params="paramsRecruitMentor"/>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <h2>멘티 구해요</h2>
      <v-card>
        <v-card-text>
          <SquadRecruitTable :params="paramsRecruitMentee"/>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SquadRecruitTable from "@/components/home/SquadRecruitTable.vue";

export default {
  components: {
    SquadRecruitTable
  },
  data() {
    return {
      paramsRecruitMentor: { page: 0, size: 10, mentor: false },
      paramsRecruitMentee: { page: 0, size: 10, mentor: true },
    }
  }
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