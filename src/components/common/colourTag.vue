<template>
  <div class="colour" :class="'bg-'+bgColor" v-text="tagText"></div>
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
    margin-right: 1rem;
    vertical-align: middle;
    position: relative;
    padding: 0 8px;
    color: white;
    text-transform: capitalize;
  }
  .colour:before {
    content: '';
    position: absolute;
    right: -5px;
    top: 0;
    height: 10px;
    width: 10px;
    border-right: 5px solid;
    border-right-color: transparent !important;
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
    border-right: 5px solid;
    border-right-color: transparent !important;
    border-bottom: 10px solid;
    border-top: none;
  }
  .bg-blue:before, .bg-blue:after {
    border-color: var(--blue);
  }
  .bg-orange:before, .bg-orange:after {
    border-color: var(--orange);
  }
  .bg-cyan:before, .bg-cyan:after {
    border-color: var(--cyan);
  }
  .bg-yellow:before, .bg-yellow:after {
    border-color: var(--yellow);
  }
  .bg-pink:before, .bg-pink:after {
    border-color: var(--pink);
  }
  .bg-purple:before, .bg-purple:after {
    border-color: var(--purple);
  }
  .bg-red:before, .bg-red:after {
    border-color: var(--red);
  }
  .bg-green:before, .bg-green:after {
    border-color: var(--green);
  }
  .bg-gray:before, .bg-gray:after {
    border-color: var(--gray);
  }
</style>
