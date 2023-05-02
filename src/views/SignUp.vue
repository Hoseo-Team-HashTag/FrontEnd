<template>
  <body>
    <section id="signUp">
      <form id="loginForm">
        <h2 class="home__description">회원가입</h2>
        <input
          type="text"
          placeholder="이메일 주소"
          class="loginForm__text"
        /><br />
        <input
          type="password"
          placeholder="8자리 이상의 비밀번호"
          class="loginForm__text"
        /><br />
        <input
          type="text"
          placeholder="본인 이름"
          class="loginForm__text"
        /><br />
        <a href="/PwPage" class="">비밀번호를 잊어버리셨나요?</a><br />
        <button class="loginForm__button" value="">생성</button>
      </form>
    </section>
  </body>
</template>

<style lang="scss" scoped>
// body {
//   background: url('@/assets/background-green.png') center/cover no-repeat;
//   height: 100%;
// }
</style>
