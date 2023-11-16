<template>
  <v-container class="register_container">
    <v-img src="~@/assets/studysquad-logo.png" alt="logo" width="350px" class="center-image"></v-img>
    <div class="register_form">
      <div class="container_text">
        이메일
      </div>
      <v-text-field v-model="user.email" placeholder="example@email.com" class="custom-text-field"/>
    </div>
    <div class="register_form">
      <div class="container_text">
        비밀번호
      </div>
      <v-text-field v-model="user.password" placeholder="password" class="password"></v-text-field>
    </div>
    <div class="register_form">
      <div class="container_text">
        닉네임
      </div>
      <v-text-field v-model="user.nickname" placeholder="nickname" class="nickname"></v-text-field>
    </div>
    <div @click="handleRegister()" class="button-center">
      <v-btn class="button1" color="#8682D5" dark>signup</v-btn>
    </div>
  </v-container>
</template>

<style>
.container_text {
  font-weight: bold;
  font-size: 20px;
}

.custom-text-field {
  width: 350px;
  margin: 0 auto;
}

.password {
  width: 350px;
  margin: 0 auto;
}

.nickname {
  width: 350px;
  margin: 0 auto;
}

.button-center {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.button1 {
  width: 350px;
  color: #ffffff !important;
}

.register_container {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        nickname: '',
      },
      successful: false,
      message: '',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    handleRegister() {
      this.message = '';

      this.$store.dispatch('register', {...this.user})
          .then(data => {
                this.message = data.message;
                this.successful = true;

                this.$router.push('/login');
              },
              error => {
                this.message = error.toString();
                this.successful = false;
                alert(error.response.data.message);
              });
    },
  },
};
</script>