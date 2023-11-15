<template>
  <v-container class="container">
    <div class="container_home_menu_name">
      <div class="container_home_menu_name_header">
        <h1>HOME</h1>
      </div>
    </div>
    <div class="container_home_header">
      <div class="container_home_header_name">
        <h1>{{ data.squadName }}</h1>
      </div>
      <div class="container_home_header_category_name">
        <v-chip
            color="secondary">
          {{ data.categoryName }}
        </v-chip>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="container_home_body">
      <div class="container_home_body_squad_explain"
           v-html="data.squadExplain">
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {}
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

.container_home_menu_name {
  padding-bottom: 10px;
}

.container_home_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.container_home_header_category_name {
  padding-bottom: 10px;
}

.container_home_body {
  display: flex;
  flex-direction: column;
  padding-top: 7px;
}

</style>
