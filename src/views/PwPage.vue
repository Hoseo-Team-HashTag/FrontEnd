<template>
  <body>
    <section id="signUp">
      <form id="loginForm">
        <h2>비밀번호 찾기(예시)</h2>
        <input
          type="text"
          placeholder="이메일 주소"
          class="loginForm__text"
        /><br />
        <p>해당 이메일 주소로 비밀번호 재설정 링크를 보내드립니다.<br /></p>
        <button class="loginForm__button">전송</button>
      </form>
    </section>
  </body>
</template>

<style lang="scss" scoped>
body {
  background: url('@/assets/background-green.png') center/cover no-repeat;
  height: 100%;
}
</style>
