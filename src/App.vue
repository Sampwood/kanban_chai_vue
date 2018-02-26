<template>
  <div id="app">
    <!-- <main-chai></main-chai> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/js/bootstrap.js'

  export default {
    name: 'app'
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

  button {
    cursor: pointer;
  }
  .font-small {
    font-size: 14px;
  }
  .c-pointer {
    cursor: pointer;
  }
  .bg-light {
    background: var(--light);
  }
  .bg-blue {
    background: var(--blue);
  }
  .bg-indigo {
    background: var(--indigo);
  }
  .bg-purple {
    background: var(--purple);
  }
  .bg-pink {
    background: var(--pink);
  }
  .bg-red {
    background: var(--red);
  }
  .bg-orange {
    background: var(--orange);
  }
  .bg-yellow {
    background: var(--yellow);
  }
  .bg-green {
    background: var(--green);
  }
  .bg-teal {
    background: var(--teal);
  }
  .bg-cyan {
    background: var(--cyan);
  }
  .bg-gray {
    background: var(--gray);
  }
</style>
