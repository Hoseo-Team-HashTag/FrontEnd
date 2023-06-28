<template>
  <body>
    <!-- home -->
    <section id="home">
      <div class="home__container">
        <h1 class="home__title">HappyTime</h1>
        <h4 class="home__description">모두의 일정, 하나의 캘린더에</h4>

        <!-- loginForm -->
        <form id="loginForm">
          로그인 또는 <a href="/SignUp" class="">등록</a><br />
          <input
            id="userEmail"
            v-model="userEmail"
            type="text"
            placeholder="이메일 주소"
            class="loginForm__text"
            :class="{ invalid: !emailValid }"
          /><br />
          <input
            id="userPW"
            v-model="userPW"
            type="password"
            placeholder="8자리 이상의 비밀번호"
            class="loginForm__text"
            :class="{ invalid: !pwValid }"
          /><br />
          <a href="/PwPage" class="">비밀번호를 잊어버리셨나요?</a><br />
          <button
            class="loginForm__button"
            value="로그인"
            @click.prevent="submitForm()"
          >
            로그인
          </button>
          <br />
          <button
            class="loginForm__button"
            value="로그인확인"
            @click.prevent="checkForm()"
          >
            로그인 확인
          </button>
          <p v-if="loginErrorMsg" class="loginForm__error">
            {{ loginErrorMsg }}
          </p>
        </form>
      </div>
    </section>

    <footer>
      <h4>Copyright © HappyTime, Inc. All rights reserved.</h4>
    </footer>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userEmail: '',
      userPW: '',
      loginErrorMsg: '',
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
  },
  methods: {
    submitForm() {
      if (this.emailValid && this.pwValid) {
        axios
          .post('http://127.0.0.1:3000/accounts/login', {
            userEmail: this.userEmail,
            userPW: this.userPW,
            // userName: this.userName,
          })
          .then(res => {
            if (res.data.loginResult == 2) {
              this.loginErrorMsg = '아이디가 틀렸습니다';
            } else if (res.data.loginResult == 1) {
              this.loginErrorMsg = '비밀번호가 틀렸습니다';
              this.userPW = '';
            } else if (res.data.loginResult == 0) {
              // 로그인 성공 시 accessToken과 refreshToken 저장
              const accessToken = res.data.accessToken;
              const refreshToken = res.data.refreshToken;
              sessionStorage.setItem('accessToken', accessToken);
              sessionStorage.setItem('refreshToken', refreshToken);

              alert('로그인 성공');
              this.$router.push('/Calendar');
            } else if (res.data.loginResult == -1) {
              alert('backend error: SQL err');
            } else {
              alert('backend err');
            }
          });
      }
    },
    checkForm() {
      axios
        .post('http://127.0.0.1:3000/token/loginSuccess', {
          accessToken: sessionStorage.getItem('accessToken'),
        })
        .then(res => {
          if (res.data.tokenResult == 1) {
            alert('토큰에 이상이있음(유효기간 만료 혹은 올바르지 않은 토큰)');
          } else if (res.data.tokenResult == 0) {
            alert('문제없음' + res.data.userEmail + '/' + res.data.userName);
          } else {
            alert('backend err');
          }
        });
    },
  },
};
</script>

<style lang="scss">
body {
  background: url('@/assets/background-green.png') center/cover no-repeat;
  height: 100%;
}

.loginForm__error {
  color: red;
}
</style>
