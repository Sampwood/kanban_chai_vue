import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/helloWorld/Hello'
import Kanban from '@/components/kanban'
import Login from '@/components/login'

// import * as server from '../vuex/wilddogSDK'
import * as server from '../vuex/dev/dataServer'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: Kanban
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Kanban' && !server.auth().currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router
