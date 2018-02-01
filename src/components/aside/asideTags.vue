<template>
  <div class="m-3 font-small">
    <header class="mb-3">
      <strong>Tags</strong>
    </header>
    <div class="dropdown font-small">
      <a class="btn btn-sm btn-light border border-secondary p-1 dropdown-toggle tag" href="#" data-toggle="dropdown">
        <icon name="plus-circle"></icon>
        <span>Add a tag</span>
      </a>
      <div class="dropdown-menu">
        <input type="text" class="dropdown-item tag-input" placeholder="Start typing a name">
        <hr class="m-0">
        <div class="dropdown-item">Demo</div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/plus-circle'
  
  export default {
    name: 'asideTagsChai'
  }
</script>

<style scoped>
  .tag {
    border-radius: 16px;
  }
  .tag svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .tag-input:focus {
    outline: none;
  }
  .tag-input:active {
    background: none;
  }
</style>
