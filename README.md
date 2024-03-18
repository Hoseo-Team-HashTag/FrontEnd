# pages
![11](https://github.com/Hoseo-Team-HashTag/FrontEnd/assets/86218573/c0af38ed-bb35-4b75-93f6-43768ef3f5b5)
![21](https://github.com/Hoseo-Team-HashTag/FrontEnd/assets/86218573/aa18f2a3-fe9b-4f4a-a0d4-55d21244a7d0)

# base
- ( = ) 좌측 위 메뉴 토클버튼 활용
- 
## * Project setup

### 주의사항

- Vue 버전과 Vuetify 버전이 충돌할 수 있음
- Vue3 버전 ==> Vuetify3 버전을 설치해야함 

## * 프로젝트 생성 방법

### yarn , 아예 처음 프로젝트 생성할 때 (버전 선택 유의)
```
yarn
yarn create vuetify
```
or Vue 프로젝트에 추가할 때 (버전 선택 유의)
```
vue add vuetify
```

## * clone 후 셋팅

### install
```
npm install
```

### 종속성 에러 발생 시
```
npm install --legacy-peer-deps
```

### 서버 실행
```
npm run dev
```

## * postcss-env err 날 경우

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

## * install extension
```
vetur
html css support
vue 3 snippets
```

## * install vue-router
- vuetify 설치 했을 땐 router 자동 설치됨.
- 기본 vue 프로젝트는 설치 필요. (공식문서 참고해서 진행 권장)
```
npm install vue-router
```
https://v3.router.vuejs.org/kr/installation.html (공식문서)

## * module scss(sass) install

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

## * 프로젝트 진행을 위해 package.json 설정

- eslint 지우기 (주석처리)

## * fontawesome 설정: 따로 설치 필요없음
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
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

## git

### git clone
- git을 사용하다 브랜치 전체를 clone하지 않고 특정 브랜치 하나만 clone하는 것이 가능하다. 특히 브랜치가 많은 경우 이 방법을 사용할 수 있다.
```
git clone -b {branch_name} --single-branch {저장소 URL}
```
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# Vue tutorials
- 구글링 + 공식문서 + 개발자velog 참고
- 공식문서로 먼저 기본기 채우기

https://vuejs.org (vue 공식문서) <br>
https://velog.io/@reasonz/2022.06.11-Vue-component-컴포넌트-만들고-불러오기-props-사용-및-주의사항 (개발자 velog)

## * 컴포넌트 만들기 규칙
- 의미있느 네이밍
- 하나의 단어가 아닌 2가지 단어가 조합된 형태로 작성하는 것이 좋다.
  (예 : Greeting.vue (X) - GreetingUser.vue(O))
- 소문자가 아니어야 한다. (카멜 케이스로 작성)

### 파일명을 2단어 이상으로 작성해야 하는 이유?
- 1단어로 작성하게 되면 나중에 HTML 태그와 혼동이 일어날 수도 있고 Vue의 스타일 가이드에서는 2가지 단어를 조합해서 만들라고 제안을 하고 있다.

## * 컴포넌트 불러오기

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

## * 컴포넌트 등록하기
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

## JS로 router 이용해서 페이지 이동시키는 방법
```vue.js
this.$router.push('/Home');
```

## * export

### component의 option properties(옵션 속성)
```
data(): 컴포넌트의 상태 데이터를 정의하는 옵션입니다. data()에서 정의한 속성들은 Vue 인스턴스가 생성될 때 초기값으로 설정되며, Vue 인스턴스가 갱신될 때마다 변화하는 값을 저장합니다.
computed: data()에 정의된 상태 데이터를 기반으로 계산된 값을 반환하는 옵션입니다. computed의 값은 data()의 값이 변경될 때마다 자동으로 재계산됩니다. computed의 값은 메소드 형태로 정의되어 있지만, 인스턴스에서 일반적인 속성처럼 참조할 수 있습니다.
methods: 컴포넌트에서 사용하는 메소드를 정의하는 옵션입니다. 이 메소드들은 컴포넌트의 템플릿에서 이벤트 핸들러로 사용될 수 있으며, 인스턴스에서 일반적인 속성처럼 참조할 수 있습니다.
```

### Vue.js 에서 자주 사용되는 속성
```
v-bind : 데이터를 바인딩할 때 사용하는 속성으로, HTML의 속성값과 Vue 인스턴스의 데이터를 연결해 줍니다. 단축 표현으로는 :가 사용됩니다.
v-on : 이벤트를 바인딩할 때 사용하는 속성으로, HTML 요소의 이벤트와 Vue 인스턴스의 메소드를 연결해 줍니다. 단축 표현으로는 @가 사용됩니다.
v-if : 조건부 렌더링을 할 때 사용하는 속성으로, 지정된 조건이 참일 경우에만 해당 요소를 렌더링합니다.
v-for : 반복문을 사용할 때 사용하는 속성으로, 지정된 데이터의 요소를 반복하여 렌더링합니다.
v-model : 양방향 데이터 바인딩을 설정할 때 사용하는 속성으로, 폼 요소와 Vue 인스턴스의 데이터를 연결하여 데이터의 양방향 변경을 처리합니다.
computed : 계산된 속성을 정의할 때 사용하는 속성으로, Vue 인스턴스의 데이터를 기반으로 계산된 값을 반환합니다.
watch : 데이터의 변경을 감지하고, 변경되면 콜백 함수를 실행하여 처리할 때 사용하는 속성입니다.
created : Vue 인스턴스가 생성되고 나서 호출되는 함수입니다. 데이터나 메서드를 초기화하거나 외부 리소스를 가져오는 데 사용됩니다.
mounted : Vue 인스턴스가 DOM에 마운트된 직후에 호출되는 함수입니다. DOM 조작이 필요한 경우에 이를 사용합니다.
watch : data 속성 또는 computed 속성의 변경 사항을 감지하고 이에 대한 콜백 함수를 실행합니다.
props : 부모 컴포넌트로부터 전달된 속성 값을 담는 객체입니다.
components : 자식 컴포넌트를 등록하는 객체입니다.
filters : 템플릿에서 사용할 수 있는 필터 함수를 등록하는 객체입니다.
directives : 커스텀 디렉티브를 등록하는 객체입니다. 디렉티브는 v- 접두사로 시작하는 특별한 속성으로 사용됩니다.
template : 컴포넌트의 템플릿을 지정하는 속성입니다. 기본값은 .vue 파일의 <template> 태그 내부의 HTML입니다.
propsData : 컴포넌트 인스턴스를 생성할 때 props 속성에 전달할 데이터를 지정하는 속성입니다.
computed : 계산된 속성을 정의하는 객체입니다. 데이터 변경에 따라 자동으로 갱신되는 속성을 만들 수 있습니다.
methods : 컴포넌트의 메서드를 정의하는 객체입니다. 템플릿에서 이를 호출할 수 있습니다.
provide/inject : 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용하는 속성입니다.
beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/beforeDestroy/destroyed : Vue 인스턴스의 라이프사이클 훅으로, 각각 인스턴스가 생성되기 전/템플릿이 렌더링되기 전/인스턴스가 DOM에 마운트되기 전/인스턴스가 업데이트되기 전/인스턴스가 DOM에서 제거되기 전에 호출됩니다.
mixins : 재사용 가능한 컴포넌트 코드를 정의하는 객체입니다. mixin 객체를 컴포넌트에 추가하여 중복 코드를 줄일 수 있습니다.
extends : 다른 컴포넌트의 옵션을 확장하여 사용하는 속성입니다. extends 속성을 사용하면 다른 컴포넌트에서 정의한 옵션을 불러와서, 그 옵션을 확장할 수 있습니다.
```

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


