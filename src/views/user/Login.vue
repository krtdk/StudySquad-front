<template>
  <v-container class="login_container">
    <v-img src="~@/assets/studysquad-logo.png" alt="logo" width="350px"/>
    <div class="fail_login_alert" v-if="!successful">
      <v-alert
          color="error"
          icon="$error"
          title="로그인 실패"
          text="올바른 로그인 정보를 입력해주세요"/>
    </div>
    <div class="login_form">
      <v-text-field
          v-model="user.email"
          placeholder="example@email.com"
          variant="solo"/>

      <v-text-field
          v-model="user.password"
          placeholder="password"
          @keyup.enter="handleLogin()"
          :type="'password'"
          variant="solo"/>

      <v-btn @click="handleLogin()" class="login_button">LOGIN</v-btn>

      <div class="login_router">
        <router-link to="/join" class="login_link">회원가입</router-link>
      </div>
    </div>
  </v-container>
</template>

<style>
a {
  text-decoration: none;
  color: rgb(128, 128, 128);
}

a:hover {
  color: darkgray;
}

.fail_login_alert {
  width: 350px;
  padding-bottom: 15px;
}

.login_button {
  background-color: #8682D5;
  color: white;
  width: 100%;
}

.login_form {
  width: 350px;
}

.login_container {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login_router {
  padding-top: 10px;
}

.login_link {
  display: flex;
  justify-content: right;
}
</style>

<script>
export default {
  name: 'LoginForm', // 컴포넌트 이름을 변경
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      successful: true,
    };
  },
  computed: {},
  methods: {
    handleLogin() {
      this.$store.dispatch('login', {...this.user})
          .then(() => {
                this.successful = true;

                this.$router.push('/');
              },
              () => {
                this.removeLoginData();
                this.successful = false;
              });

    },
    removeLoginData() {
      this.user.email = '';
      this.user.password = '';
    }
  },
};
</script>