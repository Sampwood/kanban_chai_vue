<template>
  <div class="colour" :class="bgColor">
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'colourTag',
    props: {
      bgColor: {
        required: true
      }
    }
  }
</script>

<style scoped>
  .colour {
    width: 15px;
    height: 20px;
    padding-left: 15px;
    display: inline-block;
    margin-right: .5rem;
    vertical-align: middle;
  }
  .colour div {
    border-right: 5px solid transparent !important;
    border-top: 10px solid;
    border-bottom: 10px solid;
  }
  .blue {
    background: var(--blue);
  }
  .blue div {
    border-color: var(--blue);
  }
  .orange {
    background: var(--orange);
  }
  .orange div {
    border-color: var(--orange);
  }
  .cyan {
    background: var(--cyan);
  }
  .cyan div {
    border-color: var(--cyan);
  }
  .yellow {
    background: var(--yellow);
  }
  .yellow div {
    border-color: var(--yellow);
  }
  .pink {
    background: var(--pink);
  }
  .pink div {
    border-color: var(--pink);
  }
  .purple {
    background: var(--purple);
  }
  .purple div {
    border-color: var(--purple);
  }
  .red {
    background: var(--red);
  }
  .red div {
    border-color: var(--red);
  }
  .green {
    background: var(--green);
  }
  .green div {
    border-color: var(--green);
  }
</style>
