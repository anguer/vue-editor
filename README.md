# Vue Editor

## Install

```
npm install vue-md-editor --save
```

## Usage

```js
// main.js
import Vue from 'vue'
import VueEditor from 'vue-md-editor'

Vue.use(VueEditor)

new Vue({
  el: '#app',
  data: {},
  ...
})
```
```html
// index.html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>VueEditor example</title>
</head>
<body>
  <div id="app">
    <vue-editor ng-model="value"></vue-editor>
  </div>
</body>
</html>
```
