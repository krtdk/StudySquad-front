<template>
  <div class="side_bar_button">
    <v-btn
        class="side_bar_button_style"
        @click="navigateTo('/squad/' + squadId + '/end')">
      HOME
    </v-btn>
    <v-btn
        class="side_bar_button_style"
        @click="navigateTo('/squad/' + squadId + '/end' + '/mission')">
      MISSION
    </v-btn>
    <v-btn
        class="side_bar_button_style"
        @click="navigateTo('/squad/' + squadId + '/end' + '/squadboard')">
      SQUAD BOARD
    </v-btn>
    <v-btn
        class="side_bar_button_style"
        @click="navigateTo('/squad/' + squadId + '/end' + '/summarize')">
      SUMMARIZE
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ['squadId'],
  data() {

  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  mounted() {
    console.log(this.squadId);
  }
}
</script>

<style>
.side_bar_button {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.side_bar_button_style {
  border-radius: 6px;
  background-color: #8580D8F5;
  color: white;
  margin-bottom: 7px;
  width: 100%;
}

.button_router_link_style {
  text-decoration: none;
  color: white;
  width: 100%;
}
</style>
