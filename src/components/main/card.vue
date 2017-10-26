<template>
  <div class="card text-left">
    <div class="card-header category">
      <i class="svg-icon svg-baseline">
        <icon name="sticky-note-o"></icon>
      </i>
      <span v-text="category"></span>
    </div>
    <div class="card-body">
      <h4 class="card-title" v-text="title"></h4>
      <p class="card-text description" v-text="description"></p>
      <button type="button" class="btn btn-primary" @click="getDetail" disabled>Detail</button>
    </div>
    <div class="card-footer text-muted" v-text="createDate"></div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/sticky-note-o'

  export default {
    name: 'card',
    props: {
      title: {
        required: true,
        type: String,
        default: ''
      },
      category: {
        type: String,
        default: 'Feature'
      },
      description: {
        type: String,
        default: ''
      },
      createDate: {
        type: String,
        default: new Date().toLocaleString()
      },
      getDetail: {
        type: Function,
        default: function () {}
      }
    }
  }
</script>

<style scoped>
</style>