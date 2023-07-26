<template>
  <v-app-bar app color="white" dark flat class="px-20">
    <v-btn @click="$router.push('/')" class="logo-button no-hover-background" :ripple="false" style="position: relative;">
      <template #prepend>
        <img class="mr-3 logo-image" :src="require('../assets/pinterest_board_photo.png')" height="60"/>
      </template>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/')">HOME</v-btn>

    <v-btn @click="$router.push('/SquadHome')">SQUAD</v-btn>

     <v-btn>Board
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="goToLink(item.link)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn @click="$router.push('/MyPage')">MY PAGE</v-btn>
    <v-btn class="purple-button" dark @click="$router.push('/SignIn')">LOGIN</v-btn>

  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    goToLink(link) {
      this.$router.push(link);
    },
  },
   data: () => ({
      items: [
        { title: 'MentorBoard', link: '/MentorBoard'},
        { title: 'MenteeBoard', link: '/MenteeBoard' },
        { title: 'BulletinBoard', link: '/BulletinBoard' },
   ],
   }),
};
</script>

<style>
.divider {
  height: 2px;
  background-color: grey;
}
.logo-button {
  padding: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.no-hover-background:hover::before {
  background-color: transparent !important;
  opacity: 0 !important;
}
.logo-image {
  width: 70px;
  height: 70px;
  position:relative;
  left: 2px;
}


.purple-button {
  background-color:#8580D8F5  !important;
  color: black !important;
}
</style>
