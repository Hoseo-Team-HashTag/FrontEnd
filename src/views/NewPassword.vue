<template>
  <body>
    <section id="signUp">
      <form id="loginForm" v-on:submit.prevent="newPwForm">
        <h2 class="home__description">비밀번호 변경</h2>
        <!-- v-model: userPW을 양방향 데이터 바인딩으로 연결 -->
        <input
          id="userPw"
          v-model="userPW"
          type="password"
          placeholder="8자리 이상의 새 비밀번호"
          minlength="8"
          maxlength="16"
          class="loginForm__text"
          :class="{ invalid: !pwValid }"
        /><br />
        <div v-if="!pwValid">변경할 비밀번호를 8자리 이상 입력해주세요.</div>
        <input
          id="checkPw"
          v-model="checkPW"
          type="password"
          placeholder="비밀번호 확인"
          minlength="8"
          maxlength="16"
          class="loginForm__text"
          :class="{ invalid: !checkPwValid }"
          @blur="checkPwValid"
        />
        <br />
        <div v-if="!checkPwValid">비밀번호가 동일하지 않습니다.</div>
        <p>비밀번호 변경 후, 다시 로그인 하세요.<br /></p>
        <button v-if="isFormValid" class="loginForm__button">변경</button>
      </form>
    </section>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userPW: '',
      checkPW: '',
    };
  },

  computed: {
    pwValid() {
      return this.userPW.length >= 8;
    },
    checkPwValid() {
      return this.checkPW === this.userPW;
    },
    isFormValid() {
      return this.pwValid && this.checkPwValid;
    },
  },

  methods: {
    newPwForm() {
      // console.log(this.$route.prams.token);
      // newPwForm 유효성 검사
      if (this.isFormValid) {
        axios
          .post(
            'http://127.0.0.1:3000/accounts/NewPassword/' +
              this.$route.params.token,
            {
              userPW: this.userPW,
            },
          )
          .then(res => {
            if (res.data.resetResult == 1) {
              alert(
                '유효시간 경과하였거나 올바르지 않은 접근입니다. 요청하여 새로운 주소로 시도해주시기 바랍니다.',
              );
            } else if (res.data.resetResult == -1) {
              alert('backend error: 서버 오류로 인한 전송 실패');
            } else if (res.data.resetResult == 0) {
              alert('초기화 성공!');
              this.$router.push('/');
            } else {
              alert('backend error: err');
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background: url('@/assets/background-green.png') center/cover no-repeat;
  height: 100%;
}

.invalid {
  border: 1px solid red;
}
</style>
