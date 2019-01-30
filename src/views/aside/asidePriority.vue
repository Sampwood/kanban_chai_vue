<template>
  <div class="priority-selection d-flex m-3">
    <div class="dropdown">
      <priority class="btn btn-light dropdown-toggle py-1 c-pointer" :text="priorities[cardData.priority]"
        :level="cardData.priority" data-toggle="dropdown"></priority>
      <div class="dropdown-menu">
        <div class="dropdown-item c-pointer priority-item" :key="index"
          v-for="(priority, index) in priorities" @click="selectPriority(index)">
          <priority class="priority-item-content" :text="priority" :level="index"></priority>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/thermometer-0'
  import { PRIORITY } from '@/config/data-type'
  import priority from '@/components/priority'

  export default {
    name: 'asidePriorityChai',
    data () {
      return {
        priorities: PRIORITY,
      }
    },
    components: {
      priority,
    },
    props: {
      cardData: {
        required: true,
      },
      updateData: {
        type: Function,
        required: true,
      },
    },
    methods: {
      selectPriority (index) {
        this.updateData(this.cardData.key, 'priority', index)
      },
    },
  }
</script>

<style scoped>
  .priority-item {
    padding-left: 1rem;
  }
  .priority-item:active {
    background-color: #e9f5fe;
  }
  .priority-item-content {
    background-color: transparent;
  }
</style>
