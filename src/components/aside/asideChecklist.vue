<template>
  <div class="checklist m-3 font-small">
    <header class="mb-3">
      <strong>Checklist</strong>
    </header>
    <div class="mb-3" v-if="hasItems">
      <div class="d-flex justify-content-between checklist-status">
        <strong><span>0</span>% done</strong>
        <div>0 of 1</div>
      </div>
      <div class="input-group">
        <div class="mr-auto">
          <input type="checkbox" class="align-middle">
          <span class="align-middle">1</span>
        </div>
        <div>
          <span class="align-middle">Weight</span>
          <span class="align-middle rounded-circle text-white bg-secondary weight-value">1</span>
          <input type="range" min="1" max="10" step="1" class="align-middle">
          <icon name="trash-o" class="align-middle"></icon>
        </div>
      </div>
    </div>
    <button class="btn btn-sm btn-light border border-secondary" @click="hasItems=!hasItems">Add an item</button>
  </div>
</template>

<script>
  import 'vue-awesome/icons/trash-o'

  export default {
    name: 'asideChecklistChai',
    data () {
      return {
        hasItems: false
      }
    }
  }
</script>

<style scoped>
  .checklist-status {
    border-bottom: 1px solid #dee2e6;
    margin-bottom: .5rem;
  }
  .weight-value {
    width: 21px;
    display: inline-block;
    text-align: center;
  }
</style>
