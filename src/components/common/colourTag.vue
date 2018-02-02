<template>
  <div class="colour" :class="bgColor" v-text="tagText"></div>
</template>

<script>
  export default {
    name: 'colourTag',
    props: {
      bgColor: {
        required: true
      },
      tagText: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .colour {
    height: 20px;
    display: inline-block;
    margin-right: .5rem;
    vertical-align: middle;
    position: relative;
    padding: 0 8px;
    color: white;
  }
  .colour:before {
    content: '';
    position: absolute;
    right: -5px;
    top: 0;
    height: 10px;
    width: 10px;
    border-right: 5px solid transparent !important;
    border-top: 10px solid;
    border-bottom: none;
  }
  .colour:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -5px;
    height: 10px;
    width: 10px;
    border-right: 5px solid transparent !important;
    border-bottom: 10px solid;
    border-top: none;
  }
  .blue {
    background: var(--blue);
  }
  .blue:before, .blue:after {
    border-color: var(--blue);
  }
  .orange {
    background: var(--orange);
  }
  .orange:before, .orange:after {
    border-color: var(--orange);
  }
  .cyan {
    background: var(--cyan);
  }
  .cyan:before, .cyan:after {
    border-color: var(--cyan);
  }
  .yellow {
    background: var(--yellow);
  }
  .yellow:before, .yellow:after {
    border-color: var(--yellow);
  }
  .pink {
    background: var(--pink);
  }
  .pink:before, .pink:after {
    border-color: var(--pink);
  }
  .purple {
    background: var(--purple);
  }
  .purple:before, .purple:after {
    border-color: var(--purple);
  }
  .red {
    background: var(--red);
  }
  .red:before, .red:after {
    border-color: var(--red);
  }
  .green {
    background: var(--green);
  }
  .green:before, .green:after {
    border-color: var(--green);
  }
</style>
