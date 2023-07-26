<template>
    <v-container>

      <br>
      <br>
        <span class="Studylabel1">스쿼드 가입</span>
        <br>
        <br>
        <div class="rounded-box">
            <span class="Studylabel2">Java</span>
            <span class="Studylabel3">속닥속닥</span>
            <span class="Studylabel4">작성자: OOO님<br> 현재 인원: 3/4</span>
        </div>
        <br>
        <hr>
        <div class="text-container">
            <span class="Studylabel5">안녕하세요 자바 스터디 멘토 OOO입니다.</span>
            <br>
            <span class="Studylabel5">저희는 람다 스트림에 대해서 깊게 공부할려고합니다.</span>
            <br>
            <br>
            <span class="Studylabel5">이러한 분들이 지원해주세요!!</span>
        </div>
        <div class="text-container">
            <span class="Studylabel6">º 자바 람다 스트림에 대해서 자세히 공부해보고 싶다.</span>
            <br>
            <span class="Studylabel6">º  자바의 람다 스트림 문법에 이해가 되지 않는다.</span>
            <br>
            <span class="Studylabel6">º  이번 기회에 람다 스트림을 정복해 보고 싶다.</span>
        </div>
        <br>
        <div class="radio-button-container">
          <v-radio-group v-model="role" inline >
            <v-radio label="멘토" value="rdo1"></v-radio>
            <v-radio label="멘티" value="rdo2"></v-radio>
          </v-radio-group>
          <v-btn color="#0099ff" class="confirm-button" dark >가입</v-btn>
        </div>
      </v-container>

</template>
<style>
.Studylabel1{
    padding: 50px;
    font-weight: bold;
    font-size: 30px;
}
.rounded-box{
    margin-left: 50px;
}
.Studylabel2{
    background-color:#D4D4D4;
    border-radius: 10px;
    font-size: 8px;
    width: 30px;
    height: 20px;
    justify-content: center;
   align-items: center;
}
.Studylabel3{
    margin-left: 5px;
    font-weight: bold;
    font-size: 20px;
}
.Studylabel4{
    position: absolute;
    right: 10%;
}
.Studylabel5{
  font-weight: bold;
  padding: 50px;
  font-size: 18px;
}
.Studylabel6{
  font-weight: bold;
  padding: 50px;
  font-size: 15px;
}
.radio-button-container {
     display: flex;
     position: absolute;
     right: 10%;
    align-items: right;
    margin: 25px;

}
.confirm-button {
   margin-left: 15px;
   font-weight: bold;

}


</style>

<script>
export default {
  name: 'LoginForm', // 컴포넌트 이름을 변경
  data() {
    return {
      role:'rdo1'
    };
  },
  computed: {},
  methods: {},
};
</script>
