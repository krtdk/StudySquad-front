<template>
  <v-app style="height: 100%; font-family: inherit;">
    <div style="display: flex; flex-direction: column; height: 100%;">
      <NavBar></NavBar>
      <div class="router-view-container">
        <router-view style="flex: 1; padding-top: 70px; "></router-view>
      </div>
      <FooterView></FooterView>
    </div>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterView from './components/FooterView.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterView,
  },
  data() {
    return {
      // 데이터 내용 추가
    };
  },
};
</script>
<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-view-container {
  margin-left: 250px;
  margin-right: 250px;
  flex: 1;
}
</style>