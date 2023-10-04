<template>
  <v-container class="container">
    <div class="container_header">
      <h2>모집중인 스쿼드</h2>
    </div>
    <div class="container_middle">
      <div class="container_middle_select">
        <v-select
            label="모집중"
            :items="select.selectItems"
            v-model="select.singleItem"
            variant="solo"/>
      </div>
      <div class="container_middle_chip_group">
        <div class="middle_chip_header">
          <p class="text-left">카테고리</p>
        </div>
        <v-chip-group
            class="middle_chip_once"
            filter
            selected-class="text-primary"
            v-model="chip.singleTag">
          <v-chip
              v-for="tag in chip.tags"
              :key="tag.index"
              @click="handleClickTag(tag)">
            {{ tag.label }}
          </v-chip>
        </v-chip-group>
      </div>
    </div>
    <div class="container_body">
      <v-card>
        <v-card-text>
          <div class="container_body_recruit_squad">
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
                  @click="routeRecruitSquad(item)">
                <td>{{ item.squadName }}</td>
                <td>{{ item.categoryName }}</td>
                <td>{{ item.creatorName }}</td>
                <td>{{ item.userCount }} / 4</td>
              </tr>
              </tbody>
            </v-table>
          </div>
        </v-card-text>
      </v-card>
      <div
          class="container_body_create_squad">
        <v-btn
            class="container_body_create_squad_button"
            @click="routeCreateSquad">
          스쿼드 생성
        </v-btn>
      </div>
      <div class="container_body_pagination">
        <v-pagination :length="totalPages" v-model="currentPage"/>
      </div>
    </div>
  </v-container>
</template>

<script>
import SquadService from "@/service/squad.service";

export default {
  data() {
    return {
      data: [],
      chip: {
        tags: [
          {label: 'FRONTEND', index: 0},
          {label: 'BACKEND', index: 1},
          {label: 'ANDROID', index: 2},
          {label: 'IOS', index: 3},
          {label: 'LANGUAGE', index: 4},
          {label: 'ALGORITHM', index: 5},
          {label: 'DATABASE', index: 6},
          {label: 'DEVOPS', index: 7},
        ],
        singleTag: '',
      },
      select: {
        selectItems: [
          '전체',
          '멘토',
          '멘티'
        ],
        singleItem: '',
      },
      mentor: '',
      totalPages: '',
      currentPage: 1,
    }
  },
  mounted() {
    if (history.state.mentor === undefined) {
      this.select.singleItem = '전체';
    } else if (!history.state.mentor) {
      this.select.singleItem = '멘토';
      this.mentor = false;
    } else if (history.state.mentor) {
      this.select.singleItem = '멘티';
      this.mentor = true;
    }

    this.handleClickTag(this.chip.singleTag);
  },
  methods: {
    handleClickTag(tag) {
      const params = this.createRequestParams(tag);

      SquadService.getRecruitSquads(params)
          .then(response => {
            this.data = response.data.content;
            this.totalPages = response.data.totalPages;
            this.currentPage = response.data.number + 1;
          })
          .catch(() => {
            console.log('게시글이 존재하지 않습니다');
          });
    },
    createRequestParams(tag) {
      const params = {page: 0, size: 10, categoryName: ''};

      if (this.chip.singleTag !== undefined) {
        this.checkSelectItem(params);
        params.categoryName = tag.label;
      } else {
        this.checkSelectItem(params);
        delete params.categoryName;
      }

      return params;
    },
    checkSelectItem(params) {
      if (this.hasSelectItem()) {
        params.mentor = this.mentor;
      } else {
        delete params.mentor;
      }
    },
    hasSelectItem() {
      return this.select.singleItem !== '전체';
    },
    routeRecruitSquad(item) {
      this.$router.push({
        path: `/squad/recruit/${item.squadId}`,
        state: item,
      });
    },
    routeCreateSquad() {
      if (this.$store.getters.isLoggedIn) {
        this.$router.push('/squad/write');
      } else {
        this.$router.push('/login');
      }
    },
  },
  watch: {
    'select.singleItem': function (newValue) {
      switch (newValue) {
        case '전체':
          this.mentor = '';
          break;
        case '멘토' :
          this.mentor = false;
          break;
        case '멘티' :
          this.mentor = true;
          break;
      }

      const tag = this.chip.singleTag;

      if (typeof tag === 'number') {
        this.handleClickTag(this.chip.tags[this.chip.singleTag]);
      } else {
        this.handleClickTag(tag);
      }
    },

    'currentPage': function (newPage) {
      this.currentPage = newPage;

      const requestPageParam = newPage - 1;
      const params = {page: requestPageParam, size: 10};

      this.checkSelectItem(params);

      if (this.chip.singleTag !== undefined && this.chip.singleTag !== '') {
        params.categoryName = this.chip.singleTag;
      }

      SquadService.getRecruitSquads(params)
          .then(response => {
            this.data = response.data.content;
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container_header {
  padding-bottom: 30px;
}

.container_middle {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.container_middle_select {
  margin: 0;
  padding: 0;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.container_middle_chip_group {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.middle_chip_header {
  font-size: 9px;
  padding-left: 5px;
  padding-bottom: 3px;
}

.middle_chip_once {
  padding: 3px;
  margin: 0;
}

.container_body_pagination {
  padding-top: 30px;
}

.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.container_body_create_squad {
  display: flex;
  justify-content: right;
  padding-top: 10px;
}

.container_body_create_squad_button {
  background-color: #8580D8F5;
  color: white;
}
</style>