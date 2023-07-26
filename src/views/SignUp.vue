<template>
 <v-container>
        <!-- 로그인 폼 내용 -->
        <v-img src="~@/assets/studysquad-logo.png"  alt="logo" width="350px" class="center-image"></v-img>
        <div class="centered-text">
         <span class="Signuplabel1">이메일</span>
        </div>
        <v-text-field placeholder="name@email.com" class="custom-text-field"></v-text-field>
        <div class="centered-text2">
         <span class="Signuplabel2">비밀번호</span>
        </div>
        <v-text-field placeholder="*******" class= "password"></v-text-field>
        <div class="centered-text">
         <span class="Signuplabel1">닉네임</span>
        </div>
        <v-text-field placeholder="UserName" class="nickname"></v-text-field>
        <div class="button-center">
            <v-btn class="button1" color="#8682D5" dark >Sign Up</v-btn>
        </div>
    </v-container>
</template>
<style>
.centered-text{
    text-align: center;
    margin-left: auto;
    margin-right: 290px;

}
.centered-text2{
    text-align: center;
    margin-left: auto;
    margin-right: 280px;

}
.Signuplabel1{
        font-weight: bold;
        font-size: 20px;
}
.custom-text-field {
    width: 350px;
    margin: 0 auto;
}
.Signuplabel2{
        font-weight: bold;
        font-size: 19px;
}
.password{
    width: 350px;
    margin: 0 auto;
}
.nickname{
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
</style>

<script>
export default {
  name: 'LoginForm', // 컴포넌트 이름을 변경
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
};
</script>