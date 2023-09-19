<template>
  <v-app-bar app color="white" dark flat class="px-20">
    <v-btn @click="$router.push('/')" class="logo-button no-hover-background" :ripple="false"
           style="position: relative;" size="large">
      <template #prepend>
        <img class="mr-3 logo-image" :src="require('../assets/main_logo.png')" height="60"/>
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

    <v-btn @click="routeMyPage()">MY PAGE</v-btn>

    <v-btn class="purple-button" dark
           @click="$router.push('/SignIn')"
           v-if="!loggedIn">
      LOGIN
    </v-btn>

    <v-btn class="purple-button" dark
           @click="logout()"
           v-else>
      LOGOUT
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  data: () => ({
    items: [
      {title: 'MentorBoard', link: '/MentorBoard'},
      {title: 'MenteeBoard', link: '/MenteeBoard'},
      {title: 'BulletinBoard', link: '/BulletinBoard'},
    ],
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({behavior: "smooth"});
    },
    goToLink(link) {
      this.$router.push(link);
    },
    routeMyPage() {
      if (this.$store.getters.isLoggedIn) {
        this.$router.push('/SignIn');
      } else {
        this.$router.push('/MyPage');
      }
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
};
</script>

<style>
.divider {
  height: 2px;
  background-color: grey;
}

.logo-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-hover-background:hover::before {
  background-color: transparent !important;
  opacity: 0 !important;
}

.logo-image {
//width: 70px; //height: 70px; position: absolute; top: 0px; left: 0px; width: 350%;
  height: 100%;
}


.purple-button {
  background-color: #8580D8F5 !important;
  color: black !important;
}
</style>
