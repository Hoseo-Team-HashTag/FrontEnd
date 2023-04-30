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

<style lang="scss">
/* variabled.scss */
/* _가 붙은 scss 파일은 변수만을 저장하는 파일로 인식된다. ex) _blah.scss */

// 이 파일은 vue.config.js 에 모듈화 했음 = 따로 import 필요없음
// @import "@/asstes/scss/파일명"; 이런식으로 사용가능

// 이런식으로 변수선언해서 사용 가능. 예시임
$test_def: #616161;
$color-nav-purple: #9c8dbd;

// 이런식으로도 가능
/* Global */
:root {
  /* Color */
  --color-white: #ffffff;
  --color-light-white: #eeeeee;
  --color-dark-white: #bdbdbd;
  --color-pink: #fe918d;
  --color-dark-pink: #ff6863;
  --color-dark-grey: #4d4d4d;
  --color-grey: #616161;
  --color-light-grey: #7c7979;
  --color-blue: #73aace;
  --color-yellow: #fff7d1;
  --color-orange: #feb546;
  --color-black: #000000;
  --color-deep-purple: #8460cb;
  --color-nav-purple: #9c8dbd;
  --color-light-purple: #e7b9ff;
  --color-purple: #8876b3;
  --color-green: #82bf56;
  --color-depp-green: #5aa637;
  --color-light-green: #c7f29b;
  --color-nav-green: #a8d977;
  /* Font size */
  --font-large: 48px;
  --font-medium: 28px;
  --font-regular: 18px;
  --font-small: 16px;
  --font-micro: 14px;
  /* Font weight */
  --weight-bold: 700;
  --weight-semi-bold: 600;
  --weight-regular: 400;
  /* Size */
  --size-border-radius: 4px;
  /* Animation */
  --animation-duration: 300ms;
}

/* Universal tags */

* {
  box-sizing: border-box;
}

html {
  background: url('@/assets/background-green.png') center/cover no-repeat;
  height: 100%;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  /* 마우스가 텍스트위 올라갔을 때 상태 */
  cursor: default;
  // height: 100%;
}

a {
  text-decoration: none;
  color: var(--color-white);
}

ul {
  /* list-style: none > 리스트 옆에 점 없애기 */
  list-style: none;
  padding-left: 0;
}

button {
  background-color: transparent;
  cursor: pointer;
  // border: none;
  outline: none;
}

/* Typography */

h1 {
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  color: var(--color-black);
  margin: 16px 0px;
}

h2 {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  color: var(--color-black);
  margin: 8px 0;
}

h3 {
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-black);
  margin: 8px 0;
}

p {
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-black);
  margin: 4px 0;
}

th {
  background-color: var(--color-nav-green);
}

th:hover {
  background-color: var(--color-green);
}

td:hover {
  background-color: var(--color-light-white);
}

footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  background: transparent;
}

/* Navbar */

/* # = id 선택자 */

#navbar {
  /* fixed > 원래 위치와 상관없이 위치지정, 
    상위 요소에 영향 안받음 */
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-nav-green);
  // 배경 투명으로
  // background-color: transparent;
  /* align-items = 로고 가운데로 정렬 */
  align-items: center;
  color: var(--color-white);
  padding: 16px;
  transition: all var(--animation-duration) ease-in-out;
  /* z-index: 1 > navbar는 무슨일이 있어도 제일 위에 있어야함 */
  z-index: 1;
}

#navbar.navbar--dark {
  background-color: var(--color-nav-purple);
  padding: 8px;
}

/* . = class 선택자 */
.navbar__menu {
  display: flex;
  margin: -16px;
}

.navbar__logo {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
}

/* 첫번째: 위아래, 두번쨰: 양옆 */
.navbar__menu__item {
  padding: 8px 12px;
  margin: 0 4px;
  /* pointer = 클릭가능상태 */
  cursor: pointer;
  border-radius: var(--size-border-radius);
}

// .navbar__menu__item.active {
//     border: 1px solid var(--color-white);
// }    vue 문법에선 아래처럼
.navbar__menu .router-link-exact-active {
  border: 1px solid var(--color-white);
}

// 마우스 hover 됐을 때
.navbar__menu__item:hover {
  background-color: var(--color-light-green);
}

.mainView {
  padding: 64px;
}

#home {
  // background: url('@/assets/background.png') center/cover no-repeat;
  padding: 40px;
  padding-top: 160px;
  /* text-align: 중앙으로 */
  text-align: center;
}

.home__title,
.home__description {
  color: var(--color-white);
}

.home__button {
  color: var(--color-white);
  font-size: var(--weight-regular);
  margin: 24px;
  padding: 8px 12px;
  border: 2px solid var(--color-white);
  border-radius: var(--size-border-radius);
}

#about {
  background-color: rgb(150, 125, 176);
  padding: 40px;
  padding-top: 80px;
  /* text-align: 중앙으로 */
  text-align: center;
}

.about__title,
.about__description {
  color: var(--color-white);
}

.about__btn {
  padding: 12px;
  margin: 8px;
  width: 80px;
  background-color: var(--color-nav-green);
  border: none;
  border-radius: 4px;
}

.aboutset {
  display: flex;
}

.about__left {
  flex-basis: 60%;
  background-color: var(--color-dark-grey);
  /* pading: 상하 좌우; */
  padding: 20px 40px;
  height: 500px;
}

.about__right {
  flex-basis: 40%;
  background-color: var(--color-light-grey);
  padding: 20px 40px;
  height: 500px;
}

// loginForm
#loginForm {
  padding: 16px;
  padding-top: 60px;
}

.loginForm__text {
  border-radius: 4px;
  border: none;
  padding: 12px;
  margin: 8px;
  width: 300px;
  height: 48px;
  background-color: var(--color-light-white);
}

.loginForm__button {
  padding: 12px;
  margin: 8px;
  width: 300px;
  background-color: var(--color-green);
  border: none;
  border-radius: 4px;
  // outline: none;
}

.loginForm__button:hover {
  background-color: var(--color-light-green);
}

#htCalendar {
  padding-top: 100px;
  background-color: white;
  height: 100%;
}

#signUp {
  // background: url('@/assets/background.png') center/cover no-repeat;
  padding: 40px;
  padding-top: 160px;
  text-align: center;
}
</style>
