<template>
  <div id="kanban">
    <header-chai></header-chai>
    <main-chai></main-chai>
    <footer-chai></footer-chai>
  </div>
</template>

<script>
  import headerChai from './header'
  import mainChai from './main/main'
  import footer from './footer'

  export default {
    name: 'kanban',
    components: {
      'header-chai': headerChai,
      'main-chai': mainChai,
      'footer-chai': footer,
    },
  }
</script>

<style>
  #kanban {
    height: 100vh;
    background-image: url(../assets/themes/theme-8.jpg);
    background-size: cover;
  }
</style>
