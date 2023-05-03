<template>
  <body>
    <section id="signUp">
      <!-- 로그인폼 -->
      <form v-on:submit.prevent="submitForm" id="loginForm">
        <h2 class="home__description">회원가입</h2>
        <input
          id="userEmail"
          v-model="userEmail"
          type="text"
          placeholder="이메일 주소"
          class="loginForm__text"
          :class="{ invalid: !emailValid }"
        /><br />
        <div v-if="!emailValid">이메일 주소를 올바르게 입력해주세요.</div>
        <input
          id="userPw"
          v-model="userPw"
          type="password"
          placeholder="8자리 이상의 비밀번호"
          minlength="8"
          maxlength="16"
          class="loginForm__text"
          :class="{ invalid: !pwValid }"
        /><br />
        <div v-if="!pwValid">비밀번호를 8자리 이상 입력해주세요.</div>
        <input
          id="checkPw"
          v-model="checkPw"
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
        <input
          id="userName"
          v-model="userName"
          type="text"
          placeholder="본인 이름"
          class="loginForm__text"
          :class="{ invalid: !nameValid }"
        /><br />
        <div v-if="!nameValid">이름을 입력해주세요.</div>
        <a href="/PwPage" class="">비밀번호를 잊어버리셨나요?</a><br />
        <button class="loginForm__button" value="">생성</button>
      </form>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
      userPw: '',
      checkPw: '',
      userName: '',
    };
  },
  computed: {
    emailValid() {
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      return emailPattern.test(this.userEmail);
    },
    pwValid() {
      return this.userPw.length >= 8;
    },
    checkPwValid() {
      return this.checkPw === this.userPw;
    },
    nameValid() {
      return this.userName !== '';
    },
  },
  methods: {
    submitForm() {
      if (
        this.emailValid &&
        this.pwValid &&
        this.checkPwValid &&
        this.nameValid
      ) {
        // 로그인 처리
        console.log(this.userEmail, this.userPw, this.userName);
      }
    },
  },
};
</script>

<style>
.invalid {
  border: 1px solid red;
}
</style>
