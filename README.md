# base
- ( = ) 좌측 위 메뉴 토클버튼 활용

## Project setup

### 주의사항

- Vue 버전과 Vuetify 버전이 충돌할 수 있음
- Vue3 버전 ==> Vuetify3 버전을 설치해야함 

### yarn , 아예 처음 프로젝트 생성할 때 (버전 선택 유의)
```
yarn
yarn create vuetify
```
or Vue 프로젝트에 추가할 때 (버전 선택 유의)
```
vue add vuetify
```

### npm
```
npm install
```

### install postcss-env (css 전처리기 오류: postcss install 후, postcss.config.js 설정)
```
npm install postcss-preset-env --save-dev
```

### create postcss.config.js
```javascript
module.exports = {
  plugins: {
    'postcss-preset-env': {
      // options
    },
  },
};

```

### install extension
```
vetur
html css support
vue 3 snippets
```

### install vue-router
- vuetify 설치 했을 땐 router 자동 설치됨.
- 기본 vue 프로젝트는 설치 필요.
```
npm install vue-router
```
https://v3.router.vuejs.org/kr/installation.html

### module scss(sass)

Sass install
```
npm install sass
npm install sass-loader@10
```

Sass use
```scss
/* vue 템플릿의 <style>에서 사용한다. */
<style lang="scss">
	...CSS 정의
</style>
```

### 프로젝트 진행을 위해 package.json 설정

- eslint 지우기 (주석처리)

### fontawesome 설정: 따로 설치 필요없음
```javascript
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';

/* 기본셋을 fontawesome으로 설정, 사용방법 예시
<v-icon icon="fas fa-plus" /> // This renders a FontAwesome icon
<v-icon icon="mdi:mdi-minus" /> // This renders a MDI icon */
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
```

## 컴포넌트 만들기 규칙
- 의미있느 네이밍
- 하나의 단어가 아닌 2가지 단어가 조합된 형태로 작성하는 것이 좋다.
  (예 : Greeting.vue (X) - GreetingUser.vue(O))
- 소문자가 아니어야 한다. (카멜 케이스로 작성)

### 파일명을 2단어 이상으로 작성해야 하는 이유?
- 1단어로 작성하게 되면 나중에 HTML 태그와 혼동이 일어날 수도 있고 Vue의 스타일 가이드에서는 2가지 단어를 조합해서 만들라고 제안을 하고 있다.

## 컴포넌트 불러오기

### App.vue에서 GreetingUser 컴포넌트를 불러오는 방법이다.
```vue.js
import GreetingUser from './components/GreetingUser.vue';
```
- 스크립트 태그 안에 최상단에 import '컴포넌트 이름' from '경로';를 작성하면 된다.
컴포넌트 이름은 원하는 것으로 작성해도 되지만 대문자 카멜케이스 규칙을 지켜주는 것이 좋다.
vue파일인 경우 확장자 .vue를 생략해도 된다.
```vue.js
<template>
  <div>
    <GreetingUser />
  </div>
</template>
```
- 이제 템플릿 태그 안에 import한 GreetingUser를 태그처럼 작성해줄 수 있다. 현재 import만 해온 상태로 컴포넌트 태그를 사용했기 때문에 에러가 발생할 것이다. 템플릿 태그안에서 import한 컴포넌트를 사용하기 위해서는 등록이 필요하다.

## 컴포넌트 등록하기
- import 후 등록하고 사용해야 한다.
```vue.js
export default {
  name: 'App',
  components: {
    GreetingUser,
  },
  data() {
    return {};
  },
};
```
- components 오브젝트 안에 key : value 형태로 import한 컴포넌트를 등록해주면 된다.
GreetingUser : GreetingUser 형태로 작성할 수 있는데 key와 value 명칭이 동일하면 하나로 생략해서 작성할 수 있다. (ES6 문법)


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
## 서버 실행

### Compiles and hot-reloads for development (서버 실행)

```
# yarn
yarn dev

# npm
npm run dev

```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

```


