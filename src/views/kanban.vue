<template>
  <div id="kanban">
    <header-chai></header-chai>
    <main-chai></main-chai>
    <footer-chai></footer-chai>

    <div v-if="!dashboards.length">
      <div class="default-dashboard default-dashboard-wrapper"></div>
      <div class="default-dashboard">
        <div class="default-dashboard-input">
          <div>请输入默认看板名</div>
          <input type="text" v-on:keyup.enter="addDashboard" v-focus v-model="dashboardName">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headerChai from './header'
  import mainChai from './main/main'
  import footer from './footer'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'kanban',
    components: {
      'header-chai': headerChai,
      'main-chai': mainChai,
      'footer-chai': footer,
    },
    data () {
      return {
        dashboardName: '',
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
    },
  }
</script>

<style>
  #kanban {
    height: 100vh;
    background-image: url(../assets/themes/theme-8.jpg);
    background-size: cover;
  }
  .default-dashboard {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .default-dashboard-wrapper {
    opacity: .5;
    background: #000;
  }
  .default-dashboard-input {
    width: 300px;
    margin: auto;
    margin-top: 15vh;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    padding: 16px 32px;
  }
  .default-dashboard-input input {
    margin-top: 16px;
    margin-bottom: 8px;
  }
</style>
