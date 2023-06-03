<template>
  <v-app-bar app color="white" dark flat class="px-20">
    <v-btn @click="goToHome" class="logo-button">
      <template #prepend>
        <v-img href="https://framer.com/projects/Untitled--m89DANGbHSVWgXTBuyHd-4OxAY?node=Nc09k9yOT" alt="Logo" class="logo-image"></v-img>
      </template>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text>HOME</v-btn>
    <v-btn text>SQUAD</v-btn>
    <v-btn text>BOARD</v-btn>
    <v-btn text>MY PAGE</v-btn>
<v-btn class="purple-button" dark>LOGIN</v-btn>
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
