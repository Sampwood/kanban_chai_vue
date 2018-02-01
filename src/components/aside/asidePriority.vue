<template>
  <div class="priority-selection d-flex m-3">
    <div class="dropdown">
      <a class="btn btn-success btn-sm dropdown-toggle" href="#" data-toggle="dropdown">
        <icon name="thermometer-0" class="align-middle"></icon>
        Normal priority
      </a>
      <div class="dropdown-menu">
        <button class="btn-light dropdown-item">No priority></button>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/thermometer-0'

  export default {
    name: 'asidePriorityChai'
  }
</script>

<style>
</style>
