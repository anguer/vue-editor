<template>
  <div id="app">
    <h2>This is Vue Markdown Editor</h2>
    <div class="vmd-container">
      <vue-editor v-model="value" @input="input"></vue-editor>
      <vue-editor></vue-editor>
    </div>
  </div>
</template>

<script>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #app > h2 {
    text-align: center;
  }

  .vmd-container {
    margin: 0 auto;
    padding: 2rem;
    height: 600px;
  }
</style>
