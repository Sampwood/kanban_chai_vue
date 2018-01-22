// entry js for develop mode
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Icon from 'vue-awesome/components/Icon'
import App from './App'
import Kanban from '@/components/kanban'

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(Vuex)
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

// import data from './vuex/dataServer'
// 获取数据
const card = {
  key: '0',
  category: 'Feature',
  title: 'Special title treatment',
  description: 'With supporting text below as a natural lead-in to additional content.',
  createDate: new Date().toLocaleString()
}

const data = {
  sections: [
    {
      key: '0',
      title: 'To Do',
      cards: [Object.assign({}, card)]
    },
    {
      key: '1',
      title: 'Ongoing',
      cards: [Object.assign({}, card)]
    },
    {
      key: '2',
      title: 'Blocked',
      cards: [Object.assign({}, card)]
    },
    {
      key: '3',
      title: 'Done',
      cards: [Object.assign({}, card)]
    }
  ],
  show: true,
  sectionTitle: ''
}

// import store from './vuex/store'
// 创建一个对象来保存应用启动时的初始状态
const state = {
  sections: data.sections,
  cardForm: {
    key: '1',
    category: 'Feature',
    title: '',
    description: ''
  },
  isShowDetail: false
}

// 用于更改状态的mutation函数，但只能进行同步操作
const mutations = {
  initSections (state) {
    state.sections = data.sections
  },
  updateCardForm (state, { key, value }) {
    state.cardForm[key] = value
  },
  addCard (state, { section, card }) {
    section.cards.push(card)
  },
  updateShowDetail (state, isShow) {
    state.isShowDetail = isShow
  }
}

// 用于更改状态的action函数，能获取异步数据
const actions = {
  loginAction (context, formData) {
  },
  getSections ({ commit }) {
    commit('initSections')
  },
  postSection (context, section) {
    context.state.sections.push(section)
  },
  postCard ({ state, commit }, { sectionKey, cardTitle }) {
    let card = {
      createDate: new Date().toLocaleString()
    }
    let newKey = parseInt(state.cardForm.key) + 1 + ''
    commit('updateCardForm', { key: 'key', value: newKey })
    card = Object.assign(card, state.cardForm, {title: cardTitle, key: newKey})
    for (let section of state.sections) {
      if (section.key === sectionKey) {
        section.cards.push(card)
      }
    }
  },
  updateCardParentSection ({ state }, {cardKey, oldSectionKey, newSectionKey}) {
    console.log(state.sections)
    let card
    let newSection
    for (let section of state.sections) {
      if (section.key === oldSectionKey) {
        for (let i = 0; i < section.cards.length; i++) {
          if (section.cards[i].key === cardKey) {
            card = section.cards[i]
            section.cards.splice(i, 1)
          }
        }
      }
      if (section.key === newSectionKey) {
        newSection = section
      }
    }
    if (card) {
      newSection.cards.push(card)
    }
  }
}

// 用于获取state的值
const getters = {
  getterSections (state) {
    return state.sections
  },
  getterShowDetail (state) {
    return state.isShowDetail
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

