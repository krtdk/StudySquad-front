<template>
  <v-container class="container">
    <div class="container_header">
      <h2>BOARD</h2>
    </div>
    <div class="container_middle">
      <div class="container_middle_header">
        <p class="text-left">카테고리</p>
      </div>
      <div class="container_middle_chip_group">
        <v-chip-group
            class="middle_chip_group_once"
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
          <div class="container_body_board">
            <v-table>
              <thead>
              <tr>
                <th>스쿼드 이름</th>
                <th>카테고리</th>
                <th>미션 순서</th>
                <th>게시글 이름</th>
                <th>작성자</th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in data"
                  :key="item.boardId"
                  class="table_row"
                  @click="routeSingleBoard(item.boardId)">
                <td>{{ item.squadName }}</td>
                <td>{{ item.categoryName }}</td>
                <td>MISSION{{item.missionSequence + 1}}</td>
                <td>{{ item.boardTitle }}</td>
                <td>{{ item.creator }}</td>
              </tr>
              </tbody>
            </v-table>
          </div>
        </v-card-text>
      </v-card>
      <div class="container_body_pagination">
        <v-pagination :length="totalPages" v-model="currentPage"/>
      </div>
    </div>
  </v-container>
</template>

<script>
import BoardService from "@/service/board.service";

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
      totalPages: '',
      currentPage: 1,
    }
  },
  methods: {
    handleClickTag(tag) {
      const params = this.createRequestParams(tag);
      this.handleGetBoards(params);
    },
    createRequestParams(tag) {
      const params = {page: 0, size: 10, categoryName: ''};

      if (this.chip.singleTag !== undefined) {
        params.categoryName = tag.label;
      } else {
        delete params.categoryName;
      }

      return params;
    },
    handleGetBoards(params) {
      BoardService.getBoards(params)
          .then(response => {
            this.data = response.data.content;
            this.totalPages = response.data.totalPages;
            this.currentPage = response.data.number + 1;
          })
          .catch(error => {
            alert(error);
          });
    },
    routeSingleBoard(boardId) {
      this.$router.push(`/boards/${boardId}`);
    }
  },
  created() {
    const params = this.createRequestParams(this.chip.singleTag);

    this.handleGetBoards(params);
  },
  watch: {
    'currentPage': function (newPage) {
      this.currentPage = newPage;

      const requestPageParam = newPage - 1;
      const params = {page: requestPageParam, size: 10};

      if (this.chip.singleTag !== undefined && this.chip.singleTag !== '') {
        params.categoryName = this.chip.tags[this.chip.singleTag].label;
      }

      console.log(params);

      this.handleGetBoards(params);
    }
  }
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
  flex-direction: column;
}

.container_middle_header {
  font-size: 9px;
  padding-left: 3px;
}

.container_middle {
  padding-bottom: 3px;
}

.container_body_pagination {
  padding-top: 10px;
}

.table_row:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>