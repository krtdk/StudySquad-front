<template>
  <v-app-bar app color="white" dark flat class="px-20">
    <v-btn @click="goToHome" class="logo-button">
      <template #prepend>
        <img class="mr-3" :src="require('../assets/studysquad-logo.png')" height="60"/>
      </template>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text>HOME</v-btn>
    <v-btn text>SQUAD</v-btn>
    <v-btn text>BOARD</v-btn>
    <v-btn text>MY PAGE</v-btn>
    <v-btn to="/login" class="purple-button" dark>Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.logo-button {
  padding: 0;
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.purple-button {
  background-color:#8580D8F5  !important;
  color: black !important;
}
</style>
