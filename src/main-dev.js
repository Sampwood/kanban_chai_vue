// entry js for develop mode
import Vue from 'vue'
import Router from 'vue-router'
import Icon from 'vue-awesome/components/Icon'

import App from './App'
import Kanban from '@/components/kanban'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

