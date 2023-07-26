<template>
  <v-container>
    <div class="board-list">
      <table class="w3-table-all">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in paginatedList" :key="idx">
            <td>{{ row.idx }}</td>
            <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
            <td>{{ row.author }}</td>
            <td>{{ row.created_at }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
        <span class="pg">
          <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
          <a
            href="javascript:;"
            v-if="paging.start_page > 10"
            @click="fnPage(paging.start_page - 1)"
            class="prev w3-button w3-border"
          >
            &lt;
          </a>
          <template v-for="(n, index) in paginavigation()" :key="index">
            <template v-if="paging.page === n">
              <strong class="w3-button w3-border w3-green">{{ n }}</strong>
            </template>
            <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(n)" :key="index">{{ n }}</a>
            </template>
          </template>
          <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page" @click="fnPage(paging.end_page + 1)" class="next w3-button w3-border">&gt;</a>
          <a href="javascript:;" @click="fnPage(paging.total_page_cnt)" class="last w3-button w3-border">&gt;&gt;</a>
        </span>
      </div>
    </div>
    <div class="common-buttons" v-if="!hideRegisterButton">
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="$router.push('/BoardWrite')">등록</button>
    </div>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    hideRegisterButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      requestBody: {},
      list: [], // Initialize as an empty array
      no: '',
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      },
      page: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
      size: this.$route.query.size ? parseInt(this.$route.query.size) : 15,
      keyword: this.$route.query.keyword,
    };
  },
  computed: {
    paginatedList() {
      const startIndex = (this.page - 1) * this.size;
      const endIndex = startIndex + this.size;
      return this.list.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.list.length / this.size);
    },
  },
  mounted() {
    this.fnGetList();
  },
  methods: {
    fnGetList() {
      // Your existing code to get the list data
      this.list = [
        {
          idx: 1,
          title: "Sample Title 1",
          author: "Sample Author 1",
          created_at: "2023-07-23 10:00:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        {
          idx: 2,
          title: "Sample Title 2",
          author: "Sample Author 2",
          created_at: "2023-07-23 11:30:00",
        },
        // Add more sample data as needed
      ];
    },
    fnView(idx) {
      // Handle the view action based on the item index (idx)
      // Replace this with your actual implementation
      alert(`View item with idx: ${idx}`);
    },
    // Your existing fnPage and other methods code
  },
};
</script>

<style scoped src="../../style/w3.css"></style>
