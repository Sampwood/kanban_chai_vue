<template>
  <div id="app">
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
</style>