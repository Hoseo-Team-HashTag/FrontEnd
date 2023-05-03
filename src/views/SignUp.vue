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
          v-model="userPW"
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
        <button v-if="isFormValid" class="loginForm__button" value="">
          생성
        </button>
      </form>
    </section>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userEmail: '',
      userPW: '',
      checkPW: '',
      userName: '',
    };
  },
  computed: {
    emailValid() {
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      return emailPattern.test(this.userEmail);
    },
    pwValid() {
      return this.userPW.length >= 8;
    },
    checkPwValid() {
      return this.checkPW === this.userPW;
    },
    nameValid() {
      return this.userName !== '';
    },
    // loginForm에 모든 값들이 정상적으로 들어갔을 경우
    isFormValid() {
      return (
        this.emailValid && this.pwValid && this.checkPwValid && this.nameValid
      );
    },
  },
  methods: {
    submitForm() {
      // 로그인폼 유효성 검사
      if (this.isFormValid) {
        axios
          .post('http://127.0.0.1:3000/accounts/signUp', {
            userEmail: this.userEmail,
            userPW: this.userPW,
            userName: this.userName,
          })
          .then(res => {
            if (res.data.signUpResult == 1) {
              alert('중복: 이미 존재하는 이메일 입니다.');
            } else if (res.data.signUpResult == -1) {
              alert('backend error: SQL err');
            } else if (res.data.signUpResult == 0) {
              alert('회원가입 성공');
            } else {
              alert('backend error: err');
            }
          });
      }
      // if (this.isFormValid) {
      //   // 로그인 처리
      //   console.log(this.userEmail, this.userPw, this.userName);

      // } else {
      //   alert('로그인 실패!!');
      // }
    },
  },
};
</script>

<style>
.invalid {
  border: 1px solid red;
}
</style>
