<template>
  <div class="priority" :class="priorityColor">
    <icon :name="'thermometer-' + level"></icon>
    <span class="priority-text" v-text="text"></span>
  </div>
</template>

<script>
  import 'vue-awesome/icons/thermometer-0'
  import 'vue-awesome/icons/thermometer-1'
  import 'vue-awesome/icons/thermometer-2'
  import 'vue-awesome/icons/thermometer-3'
  import 'vue-awesome/icons/thermometer-4'

  export default {
    name: 'priority',
    props: {
      text: {
        required: true
      },
      level: {
        type: Number,
        default: 0
      }
    },
    computed: {
      priorityColor: function () {
        let color
        switch (this.level) {
          case 0:
            color = 'alert-light'
            break
          case 1:
            color = 'alert-dark'
            break
          case 2:
            color = 'alert-success'
            break
          case 3:
            color = 'alert-warning'
            break
          case 4:
            color = 'alert-danger'
            break
          default:
            color = 'alert-light'
        }
        return color
      }
    }
  }
</script>

<style scoped>
  .priority {
    font-size: 14px;
    position: relative;
    padding: 0 10px 0 22px;
  }
  .priority svg {
    height: 20px;
    width: 12px;
    position: absolute;
    left: 6px;
  }
</style>
