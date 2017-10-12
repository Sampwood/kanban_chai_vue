<template>
  <main class="container-fluid">
    <div class="row">
      <section-chai></section-chai>
      <section-chai></section-chai>
      <section-chai></section-chai>
      <section-chai></section-chai>
    </div>
  </main>
</template>

<script>
  import section from './section'

  export default {
    name: 'main',
    components: {
      'section-chai': section
    }
  }
</script>

<style scoped>
  main {
    padding-top: 4.5rem;
  }
  .row {
    margin: 0;
  }
</style>