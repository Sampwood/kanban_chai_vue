import Vue from 'vue'
import Router from 'vue-router'
import cookie from 'js-cookie'
import Kanban from '@/views/kanban'
import Login from '@/views/auth/login'
import store from '@/store'
import * as authTypes from '@/store/auth/mutation-types.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'kanban',
      meta: {
        requireLogin: true,
      },
      component: Kanban,
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/')
  } else if (to.matched.some(record => record.meta.requireLogin)) {
    const token = cookie.get('token')
    if (token) {
      next()
      if (!store.getters['auth/userIsLogin']) {
        const account = sessionStorage.getItem('account')
        if (account) {
          store.commit('auth/' + authTypes.USER_LOGIN, JSON.parse(account))
        } else {
          const username = cookie.get('username')
          store.dispatch('auth/getUserInfo', { username, token })
        }
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
