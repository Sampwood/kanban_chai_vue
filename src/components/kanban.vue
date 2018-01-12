<template>
  <div id="kanban">
    <header-chai></header-chai>
    <main-chai></main-chai>
  </div>
</template>

<script>
  import header from './header'
  import main from './main/main'

  export default {
    name: 'kanban',
    components: {
      'header-chai': header,
      'main-chai': main
    }
  }
</script>

<style>
  #kanban {
    height: 100vh;
    background-image: url(../assets/themes/theme-8.jpg);
    background-size: cover;
  }
</style>
