import Vue from 'vue'
import Router from 'vue-router'
import cookie from 'js-cookie'
import Kanban from '@/components/kanban'
import Login from '@/components/login'
import store from '@/vuex/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'kanban',
      meta: {
        requireLogin: true
      },
      component: Kanban
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/')
  } else if (to.matched.some(record => record.meta.requireLogin)) {
    if (cookie.get('token')) {
      next()
      if (!store.getters['auth/userIsLogin']) {
        const username = cookie.get('username')
        const password = cookie.get('password')
        store.dispatch('auth/login', { username, password })
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
