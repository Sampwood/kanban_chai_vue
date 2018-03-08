// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import WildVue from 'wildvue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(WildVue)

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
