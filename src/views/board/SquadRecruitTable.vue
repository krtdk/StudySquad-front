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
        <td>{{item.squadName}}</td>
        <td>{{item.categoryName}}</td>
        <td>{{item.creatorName}}</td>
        <td>{{item.userCount}} / 4</td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<style scoped>
.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>

<script>
import SquadService from "@/service/squad.service";

export default {
  props: ['params'],

  data() {
    return {
      data: [],
    }
  },

  methods: {
    handleRecruitSquad() {
      SquadService.getRecruitSquads(this.params)
          .then(response => {
            console.log(response);
            console.log(this.params);
            this.data = response.data.content;
          })
          .catch(() => {
            console.log('게시글이 존재하지 않습니다');
          });
    },
    routeRecruitSquad(item) {
      console.log(item);
      // const routeItem = item;

      this.$router.push({
        path: `/squad/recruit/${item.squadId}`,
        state: item,
      });
    }
  },
  created() {
    this.handleRecruitSquad();
  }
}
</script>
