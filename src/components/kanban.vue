<template>
  <div id="app">
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
</style>
