<template>
  <body>
    <section id="signUp">
      <form v-on:submit.prevent="pwSearchForm" id="loginForm">
        <h2 class="home__description">비밀번호 찾기</h2>
        <!-- v-model: userEmail을 양방향 데이터 바인딩으로 연결 -->
        <input
          id="userEmail"
          v-model="userEmail"
          type="text"
          placeholder="이메일 주소"
          class="loginForm__text"
          :class="{ invalid: !emailValid }"
        /><br />
        <div v-if="!emailValid">이메일 주소를 올바르게 입력해주세요.</div>
        <p>해당 이메일 주소로 비밀번호 재설정 링크를 보내드립니다.<br /></p>
        <button v-if="isFormValid" class="loginForm__button" value="">
          전송
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
    };
  },

  computed: {
    emailValid() {
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      return emailPattern.test(this.userEmail);
    },
    isFormValid() {
      return this.emailValid;
    },
  },

  methods: {
    pwSearchForm() {
      // pwSearchForm 유효성 검사
      if (this.isFormValid) {
        axios
          .post('http://127.0.0.1:3000/accounts/pwsearch', {
            userEmail: this.userEmail,
          })
          .then(res => {
            if (res.data.emailSystemResult == 1) {
              alert('존재하지 않는 이메일 입니다.');
            } else if (res.data.emailSystemResult == -1) {
              alert('backend error: SQL err');
            } else if (res.data.emailSystemResult == 0) {
              alert('이메일 전송 성공');
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
</style>
