# base

## Project setup


# yarn (create vuetify3 is only to use yarn)
```
yarn
yarn create vuetify
```

# npm
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


