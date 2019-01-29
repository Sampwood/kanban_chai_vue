// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import App from './App'
import router from './router'
import store from './vuex/store'

if (process.env.NODE_ENV === 'production') {
  import(
    /* webpackChunkName: "sentry" */
    /* webpackMode: "lazy" */
    '@sentry/browser'
  ).then(Sentry => {
    Sentry.init({
      dsn: 'https://0c287e465f4e4287b4b517aba1cf960e@sentry.io/1370779',
      integrations: [new Sentry.Integrations.Vue({ Vue })],
    })
  })
}

Vue.config.productionTip = false

Vue.component('icon', Icon)

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  },
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
