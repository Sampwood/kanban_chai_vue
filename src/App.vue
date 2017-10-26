<template>
  <div id="app">
    <header-chai></header-chai>
    <!-- <main-chai></main-chai> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header'
  import main from './components/main/main'

  export default {
    name: 'app',
    components: {
      'header-chai': header,
      'main-chai': main
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
  }
  .svg-icon {
    display: inline-flex;
    align-self: center;
    position: relative;
    height: 1em;
    width: 1em;
  }

  .svg-icon svg {
    height:1em;
    width:1em;
  }

  .svg-icon.svg-baseline svg {
    bottom: -0.125em;
    position: absolute;
  }
</style>
