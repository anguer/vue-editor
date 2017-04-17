# Vue Editor

[![VueEditor](https://img.shields.io/npm/v/vue-md-editor.svg)](https://www.npmjs.org/package/vue-md-editor) [![NPM downloads](http://img.shields.io/npm/dm/vue-md-editor.svg)](https://npmjs.org/package/vue-md-editor) [![JS gzip size](http://img.badgesize.io/https://unpkg.com/vue-md-editor/dist/vue-editor.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/vue-md-editor/dist/vue-editor.min.js)

## [Demo](http://vue-editor.beblog.cn/)
or [Edit in JSFiddle](https://jsfiddle.net/mb5kxrfb/6/)

## Install

```shell
npm install vue-md-editor --save
```
or
```html
<script src="https://unpkg.com/vue-md-editor/dist/vue-editor.min.js"></script>
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
<!--index.html-->
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

## Dependencies
- [marked](https://github.com/chjj/marked)
- [highlight.js](https://github.com/isagalaev/highlight.js)

## Keyboards
Markdown | Result | Shortcut
---|---|---
<em>**text**</em> | **text** | Ctrl + B
`_text_` | _text_ | Ctrl + I
`### text` | Heading | Ctrl + H
`~~text~~` | ~~text~~ | Ctrl + D
`- text` | List | Ctrl + U
`1. text` | List| Ctrl + O
`[Demo](http://vue-editor.beblog.cn)` | [Demo](http://vue-editor.beblog.cn) | Ctrl + A
`![Image](https://cn.vuejs.org/images/logo.png "Title")` | Image | Ctrl + P
``text`` | `text` | Ctrl + C
`> text` | Blockquote | Ctrl + Q
