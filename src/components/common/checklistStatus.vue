<template>
  <div class="status">
    <span class="status-progress" v-bind:style="{ width: progressValue }"></span>
    <icon name="check-circle"></icon>
    <div class="status-text">
      <span v-text="progressText"></span>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/check-circle'

  export default {
    name: 'checklistStatus',
    props: {
      progress: {
        type: Number,
        required: true
      }
    },
    computed: {
      progressValue () {
        return this.progress * 100 + '%'
      },
      progressText: function () {
        if (this.progress < 1) {
          return Math.round(this.progress * 100) + '%'
        }
        return 'Done'
      }
    }
  }
</script>

<style scoped>
  .status {
    position: relative;
    padding: 0 10px 0 22px;
    border-radius: 10px;
    color: #28a745;
    overflow: hidden;
    border: 1px solid #c8e6c9;
    height: 20px;
    font-size: 13px;
    background-color: unset;
  }
  .status svg {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 0;
  }
  .status-progress {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

    width: 100%;
    background-color: #c8e6c9;
  }
  .status-text {
    position: relative;
    line-height: 20px;
  }
</style>
