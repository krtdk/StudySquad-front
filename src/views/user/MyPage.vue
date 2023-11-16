<template>
  <v-container class="container">
    <div class="container_header">
      <h2>My Page</h2>
    </div>
    <div class="container_body">
      <div class="container_body_user_squad">
        <h3>My Squad</h3>
      </div>
      <div class="container_body_squad_card">
        <v-card>
          <div class="squad_card_success"
               v-if="hasUserSquad">
            <v-card-text>
              <v-table>
                <thead>
                <tr>
                  <th>스쿼드 이름</th>
                  <th>카테고리</th>
                  <th>스쿼드 진행 상황</th>
                </tr>
                </thead>
                <tbody>
                <tr
                  v-for="item in data.content"
                  :key="item.squadId"
                  class="table_row"
                  @click="routeSquad(item)">
                  <td>{{item.squadName}}</td>
                  <td>{{item.categoryName}}</td>
                  <td>{{item.squadStatus}}</td>
                </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <div class="container_body_pagination">
              <v-pagination :length="totalPages" v-model="currentPage"/>
            </div>
          </div>
          <div class="squad_card_fail"
               v-else>
            <v-card-text
                class="squad_card_fail_text">
              <p>진행한 스쿼드가 존재하지 않습니다.</p>
            </v-card-text>
            <div class="squad_card_fail_button">
              <v-card-actions>
                <v-btn
                    @click="$router.push('/squads')">
                  스쿼드 가입하러 가기
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import SquadService from "@/service/squad.service";

export default {
  data() {
    return {
      data: {
        content: [],
      },
      hasUserSquad: '',
      totalPages: '',
      currentPage: 1,
    }
  },
  created() {
    const params = {page: 0, size: 10};

    SquadService.getUserSquad(params)
        .then(response => {
          if (response.data.content.length === 0) {
            this.hasUserSquad = false;
          } else {
            this.hasUserSquad = true;

            this.data.content = response.data.content;
            this.totalPages = response.data.totalPages;
            this.currentPage = response.data.number + 1;
          }
        })
        .catch(() => {
          this.hasUserSquad = false;
        });
  },
  methods: {
    routeSquad(squad) {
      if (squad.squadStatus === 'PROCESS') {
        SquadService.getProcessSquad()
            .then(response => {
              this.$router.push({
                path: `/squad/${squad.squadId}`,
                state: response,
              });
            });
      } else {
        this.$router.push({
          path: `/squad/${squad.squadId}/end`,
          state: squad,
        });
      }
    }
  },
  watch: {
    'currentPage': function (newPage) {
      this.currentPage = newPage;

      const requestPageParam = newPage - 1;
      const params = {page: requestPageParam, size: 10};

      SquadService.getUserSquad(params)
          .then(response => {
            this.data.content = response.data.content;
          })
          .catch(error => {
            alert(error.response.data.message);
          })
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.container_header {
  padding-bottom: 10px;
}

.container_body_user_squad {
  padding-bottom: 5px;
}

.squad_card_fail {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
}

.squad_card_fail_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.squad_card_fail_button {
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
}

.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.button_style {
  font-size: 10px;
}

.squad_card_show_list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>