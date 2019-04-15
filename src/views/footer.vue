<template>
  <div class="footer">
    <div v-for="item in dashboards" :key="item.id" class="footer-item" :class="activeDashboard === item.id ? 'active' : ''"
      @click="handleBoardClick(item)">
      {{ item.name }}
    </div>
    <button v-if="!showInput" type="button" class="btn btn-secondary" @click="showInput=true">添加新的面板</button>
    <input v-else type="text" class="footer-input" placeholder="请输入面板名" v-focus v-model="dashboardName"
      v-on:keyup.enter="addDashboard" v-on:keyup.esc="showInput = false" v-on:blur="showInput = false">
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import modal from '@/components/base/modal'

export default {
  components: {
    'modal-chai': modal,
  },
  data () {
    return {
      dashboardName: '',
      showInput: false,
    }
  },
  computed: {
    ...mapGetters({
      dashboards: 'getterDashboards',
      activeDashboard: 'getterActiveDashboard',
    }),
  },
  methods: {
    ...mapMutations({
      setActiveDashboardId: 'setActiveDashboardId',
    }),
    ...mapActions({
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
    handleBoardClick (item) {
      this.setActiveDashboardId(item.id)
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