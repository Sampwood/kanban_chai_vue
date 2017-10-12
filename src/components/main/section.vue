<template>
  <div class="card-columns col-2">
    <header>To Do</header>
    <card-chai></card-chai>
    <card-chai></card-chai>
    <button></button>
  </div>
</template>

<script>
  import card from './card'

  export default {
    name: 'section',
    components: {
      'card-chai': card
    }
  }
</script>

<style scoped>
  .card-columns {
    column-count: 1;
  }
  header {
    text-align: left;
    line-height: 40px;
  }
</style>