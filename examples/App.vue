<template>
  <div id="app">
    <h2>This is Vue Markdown Editor</h2>
    <div class="vmd-container" ref="vmd">
      <vue-editor v-model="value" @input="input"></vue-editor>
    </div>
  </div>
</template>

<script>
  /**
   * 定义__debounce函数
   *
   * @param fn 最终将执行的方法
   * @param delay 延时
   */
  function __debounce(fn, delay) {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      // 清除 timer
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  }
  export default {
    name: 'app',
    data() {
      return {
        value: '# [Fork me on Github](https://github.com/anguer/vue-editor)'
      }
    },
    methods: {
      input() {
        console.log(this.value)
      }
    }
  }
</script>

<style>
  html, body {
    position: relative;
    height: 100%;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
  }

  #app > h2 {
    text-align: center;
  }

  .vmd-container {
    position: absolute;
    top: 120px;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    z-index: 10;
  }
</style>
