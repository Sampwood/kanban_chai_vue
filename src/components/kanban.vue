<template>
  <div id="kanban">
    <header-chai></header-chai>
    <main-chai></main-chai>
  </div>
</template>

<script>
  import headerChai from './header'
  import mainChai from './main/main'

  export default {
    name: 'kanban',
    components: {
      'header-chai': headerChai,
      'main-chai': mainChai
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
