<template>
  <div class="dropdown">
    <button class="btn btn-sm btn-link dropdown-toggle paint-brush" data-toggle="dropdown">
      <icon name="paint-brush"></icon>
    </button>
    <div class="mt-0 dropdown-menu dropdown-menu-right">
      <div class="ml-2 d-flex options">
        <div class="mr-2 mb-2 bg-option" v-for="(color, i) in colors" :key="color" :class="'bg-'+color" @click="select(i)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/paint-brush'
  import { ALL_COLOURS } from '@/config/data-type'

  export default {
    name: 'colorPalette',
    data () {
      return {
        colors: ALL_COLOURS,
      }
    },
    props: ['select'],
  }
</script>

<style scoped> 
  .paint-brush:after {
    content: none;
  }
  .options {
    flex-wrap: wrap;
    width: 152px;
    margin-bottom: -.5rem;
  }
  .bg-option {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .bg-option:hover {
    border: 1px solid grey;
  }
</style>
