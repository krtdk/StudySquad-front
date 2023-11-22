<template>
  <v-container class="container">
    <div class="container_board_header">
      <h1>SQUAD BOARD</h1>
    </div>
    <div class="container_squad_board_body">
      <div
          class="container_squad_board_body_successful"
          v-if="successful">
        <div
            class="squad_board_body_successful_info"
            v-for="index in squadBoards.length"
            :key="index">
          <div class="successful_info_mission_sequence">
            <h2>MISSION {{ index }}</h2>
          </div>
          <div class="successful_info_squad_board_body">
            <v-card>
              <v-card-text>
                <v-table>
                  <thead>
                  <tr>
                    <th>스쿼드 게시글 이름</th>
                    <th>작성자</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="item in squadBoards[index - 1]"
                      :key="item.squadId"
                      class="table_row"
                      @click="routeSquadBoard(item.squadBoardId)">
                    <td>{{ item.squadBoardTitle }}</td>
                    <td>{{ item.creator }}</td>
                  </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import SquadBoardService from "@/service/squadBoard.service";

export default {
  props: ['data'],
  data() {
    return {
      squadBoards: [],
      missionLength: '',
      successful: '',
    }
  },
  methods: {
    routeSquadBoard(squadBoardId) {
      const squadId = this.data.squadId;

      this.$router.push(`/squad/${squadId}/end/squadboard/${squadBoardId}`);
    }
  },
  created() {
    SquadBoardService.getSquadBoards(this.data.squadId)
        .then(response => {
          if (response.data === undefined || response.data.length === 0) {
            this.successful = false;
          } else {
            this.successful = true;
            response.data.forEach(item => {
              const index = item.missionSequence;

              if (!this.squadBoards[index]) {
                this.squadBoards[index] = [];
              }

              this.squadBoards[index].push(item);
            });
          }
        })
        .catch(error => {
          this.successful = false;
          alert(error);
        });
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

.successful_info_squad_board_body {
  padding-bottom: 15px;
}

.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
