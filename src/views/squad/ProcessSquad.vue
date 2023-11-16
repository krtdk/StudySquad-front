<template>
  <v-container class="container">
    <div class="container_side_bar">
      <SquadRoutingButton :squadId="data.squadId"/>
    </div>
    <div class="container_body">
      <router-view :data="data"/>
    </div>
  </v-container>
</template>

<script>
import SquadRoutingButton from '@/components/squad/process/common/SquadRoutingButton.vue';

export default {
  components: {
    SquadRoutingButton,
  },
  data() {
    return {
      data: {
        squadId: '',
        squadName: '',
        categoryName: '',
        squadExplain: '',
      },
    }
  },
  methods: {},
  created() {
    if (history.state.data) {
      this.data.squadId = history.state.data.squadId;
      this.data.squadName = history.state.data.squadName;
      this.data.squadExplain = history.state.data.squadExplain;
      this.data.categoryName = history.state.data.categoryName;
    }

    console.log(this.data.squadId);
  }
}
</script>

<style>
.container {
  display: flex;
}

.container_side_bar {
  border-right: 1px solid #e0e0e0;
  padding-right: 7px;
}

.container_body {
  padding-left: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 800px;
  overflow-y: auto;
}
</style>