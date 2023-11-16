<template>
  <v-container class="container">
    <div class="container_header">
      <h1>SUMMARIZE</h1>
    </div>
    <div class="container_body">
      <div
          class="container_body_success"
          v-if="successful">
        <div class="container_body_success_header">
          <h2>목록</h2>
        </div>
        <div class="container_body_success_content">
          <v-card>
            <v-card-text>
              <v-table>
                <thead>
                <tr>
                  <th>게시글 이름</th>
                  <th>카테고리</th>
                  <th>미션 이름</th>
                  <th>미션 순서</th>
                  <th>작성자</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in boards"
                    :key="item.boardId"
                    class="table_row"
                    @click="routeBoard(item.boardId)">
                  <td>{{ item.boardTitle }}</td>
                  <td>{{ item.categoryName }}</td>
                  <td>{{ item.missionTitle }}</td>
                  <td>{{ item.missionSequence + 1 }}</td>
                  <td>{{ item.creator }}</td>
                </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import BoardService from "@/service/board.service";

export default {
  data() {
    return {
      boards: [],
      successful: '',
      squadId: '',
    }
  },
  created() {
    this.squadId = this.$route.params.squadId;

    BoardService.getBoardsWithSquad(this.squadId)
        .then(response => {
          const data = response.data;

          if (data === undefined || data.length === 0) {
            this.successful = false;
          } else {
            this.successful = true;
            this.boards = data;
          }
        })
        .catch(error => {
          this.successful = false;
          alert(error.response.data.message);
        });
  },
  methods: {
    routeBoard(boardId) {
      this.$router.push(`/boards/${boardId}`);
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
}

.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
