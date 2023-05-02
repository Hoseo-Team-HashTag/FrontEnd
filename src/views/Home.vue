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
            type="text"
            placeholder="이메일 주소"
            class="loginForm__text"
          /><br />
          <input
            type="password"
            placeholder="8자리 이상의 비밀번호"
            class="loginForm__text"
          /><br />
          <a href="/PwPage" class="">비밀번호를 잊어버리셨나요?</a><br />
          <button class="loginForm__button" value="로그인">로그인</button>
        </form>
      </div>
    </section>

    <footer>
      <h4>Copyright © HappyTime, Inc. All rights reserved.</h4>
    </footer>
  </body>
</template>

<style lang="scss"></style>
