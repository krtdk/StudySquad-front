<template>
  <v-container>
    <v-table>
      <thead>
      <tr>
        <th>스쿼드 이름</th>
        <th>카테고리</th>
        <th>작성자</th>
        <th>인원</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in data"
          :key="item.squadId"
          class="table_row"
          @click="routeRecruitSquad(item)"
      >
        <td>{{ item.squadName }}</td>
        <td>{{ item.categoryName }}</td>
        <td>{{ item.creatorName }}</td>
        <td>{{ item.userCount }} / 4</td>
      </tr>
      </tbody>
    </v-table>
    <div class="squad_list_button_container">
      <v-btn
          class="squad_list_button"
          @click="routeRecruitSquadListBoard()">
        목록
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.squad_list_button_container {
  padding-top: 10px;
  display: flex;
  flex-direction: row-reverse;
}

.squad_list_button {
  background-color: #8580D8F5;
  color: black;
}
</style>

<script>
import SquadService from "@/service/squad.service";

export default {
  props: ['params'],

  data() {
    return {
      data: [],
      mentor: '',
    }
  },

  methods: {
    handleRecruitSquad() {
      SquadService.getRecruitSquads(this.params)
          .then(response => {
            this.data = response.data.content;
          })
          .catch(() => {
            console.log('게시글이 존재하지 않습니다');
          });
    },
    routeRecruitSquad(item) {
      this.$router.push({
        path: `/squad/recruit/${item.squadId}`,
        state: item,
      });
    },
    routeRecruitSquadListBoard() {
      this.$router.push({
        path: '/squads',
        state: {
          mentor: this.mentor,
        },
      });
    }
  },
  created() {
    this.handleRecruitSquad();
    this.mentor = this.params.mentor;
  }
}
</script>
