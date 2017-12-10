import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/helloWorld/Hello'
import Kanban from '@/components/kanban'
import Login from '@/components/login'
import wilddogServer from '../vuex/wilddogSDK'

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
  console.log(wilddogServer.auth().currentUser)
  if (to.name === 'Kanban' && !wilddogServer.auth().currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router
