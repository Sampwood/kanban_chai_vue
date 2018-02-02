<template>
  <div class="dropdown">
    <button class="btn btn-sm btn-link dropdown-toggle paint-brush" data-toggle="dropdown">
      <icon name="paint-brush"></icon>
    </button>
    <div class="mt-0 dropdown-menu dropdown-menu-right">
      <div class="ml-2 d-flex options">
        <div class="mr-2 mb-2 bg-option" v-for="color in colors" :key="color" :class="color"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/paint-brush'

  export default {
    name: 'colorPalette',
    data () {
      return {
        colors: ['light', 'blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'gray']
      }
    }
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
  .light {
    background: var(--light);
  }
  .blue {
    background: var(--blue);
  }
  .indigo {
    background: var(--indigo);
  }
  .purple {
    background: var(--purple);
  }
  .pink {
    background: var(--pink);
  }
  .red {
    background: var(--red);
  }
  .orange {
    background: var(--orange);
  }
  .yellow {
    background: var(--yellow);
  }
  .green {
    background: var(--green);
  }
  .teal {
    background: var(--teal);
  }
  .cyan {
    background: var(--cyan);
  }
  .gray {
    background: var(--gray);
  }
</style>
