<template>
  <v-app>
    <v-main>
      <nav-bar/>
        <!-- 로그인 폼 내용 -->
        <v-img src="~@/assets/studysquad-logo.png"  alt="logo" width="350px" class="center-image"></v-img>
        <v-text-field placeholder="name@email.com" class="custom-text-field"></v-text-field> 
        <v-text-field placeholder="*******" class= "password"></v-text-field>
        <div class="button-center">
            <v-btn class="button1" color="#8682D5" dark >Login</v-btn>
        </div>
        <div class="button-center">
            <v-btn to="/signup" class="button2 small-button" color="#04B4AE" dark >회원가입</v-btn>
        </div>
    </v-main>
    <footer-view/>
  </v-app>
</template>
<style>
.center-image{
    display: block;
    margin: 0 auto;
}
.custom-text-field {
    width: 350px;
    margin: 0 auto;
}
.password{
    width: 350px;
    margin: 0 auto;
}
.button-center{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.button1{
    width: 350px;
    color: #ffffff !important;
}
.button2{
    margin: 10px;
    color:#ffffff !important;
}
.small-button {
  width: 100px;
  height: 20px;
  font-size: 8px;
}
</style>

<script>
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

export default {
  name: 'LoginForm', // 컴포넌트 이름을 변경
  data() {
    return {
    };
  },
  components: {
    NavBar,
    FooterView
  },
  computed: {},
  methods: {},
};
</script>