import Vue from 'vue'
import Vuex from 'vuex'
import wilddog from 'wilddog'

// 获取数据
// import data from './dataServer'
const wilddogApp = wilddog.initializeApp({
  authDomain: 'wd.wilddogio.com',
  syncURL: 'https://wd.wilddogio.com'
})
const sync = wilddogApp.sync()

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // sections: data.sections,
  sections: [],
  cardForm: {
    category: '',
    title: '',
    description: ''
  }
}

// 用于更改状态的mutation函数，但只能进行同步操作
const mutations = {
  initSections (state, sections) {
    state.sections = sections
  },
  updateCardForm (state, { key, value }) {
    state.cardForm[key] = value
  },
  addCard (state, { sectionId }) {
    state.sections.forEach(section => {
      if (sectionId === section.id) {
        let card = Object.assign({ id: section.cards.length, createDate: new Date().toLocaleString() }, state.cardForm)
        console.log(card)
        section.cards.push(card)
      }
    })
  }
}

// 用于更改状态的action函数，能获取异步数据
const actions = {
  getSections ({ commit }) {
    sync.ref().on('value', function (snapshot) {
      let data = snapshot.val()
      console.log(JSON.stringify(data))
      // TODO: get datas from db
      let sections = [{
        id: 0,
        title: 'To Do',
        cards: []
      },
      {
        id: 1,
        title: 'Ongoing',
        cards: []
      },
      {
        id: 2,
        title: 'Blocked',
        cards: []
      },
      {
        id: 3,
        title: 'Done',
        cards: []
      }]
      commit('initSections', sections)
    })
  },
  addCard ({ commit }, sectionId) {
    commit('addCard', sectionId)
  }
}

// 用于获取state的值
const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
