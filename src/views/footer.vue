<template>
  <div class="footer">
    <div v-for="(item,index) in dashboards" :key="index" class="footer-item" :class="activeBoard === index ? 'active' : ''"
      @click="handleBoardClick(item, index)">
      {{ item }}
    </div>
    <button v-if="!showInput" type="button" class="btn btn-secondary" @click="showInput=true">添加新的面板</button>
    <input v-else type="text" class="footer-input" placeholder="请输入面板名"  v-model="dashboardName"
      v-on:keyup.enter="addDashboard">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import modal from '@/components/base/modal'

export default {
  components: {
    'modal-chai': modal,
  },
  data () {
    return {
      dashboardName: '',
      showInput: false,
      activeBoard: 0,
    }
  },
  computed: {
    ...mapGetters({
      dashboards: 'getterDashboards',
    }),
  },
  created () {
    this.getDashboards()
  },
  methods: {
    ...mapActions({
      getDashboards: 'getDashboards',
      postDashboard: 'postDashboard',
    }),
    addDashboard () {
      if (!this.dashboardName) return
      console.log('添加面板', this.dashboardName)
      this.postDashboard({
        dashboardName: this.dashboardName,
      }).then(() => {
        this.dashboardName = ''
        this.showInput = false
      })
    },
    handleBoardClick (item, index) {
      console.log(item, index)
      this.activeBoard = index
    },
  },
}
</script>

<style scoped>
  .footer {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    display: flex;
    line-height: 36px;
    height: 36px;
    font-size: 14px;
  }
  .footer-item {
    padding: 0 16px;
    cursor: pointer;
  }
  .footer-item.active {
    background-color: white;
    color: black;
  }
  .btn {
    border-radius: 0;
    font-size: 14px;
  }
  .footer-input {
    padding: 0 16px;
  }
</style>