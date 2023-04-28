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

### install postcss-env
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



### Compiles and hot-reloads for development

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


