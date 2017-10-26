import Vue from 'vue'
import Vuex from 'vuex'

// 获取数据
import data from './dataServer'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  sections: data.sections,
  cardForm: {
    category: '',
    title: '',
    description: ''
  }
}

// 用于更改状态的mutation函数，但只能进行同步操作
const mutations = {
  updateCardForm (state, { key, value }) {
    state.cardForm[key] = value
  },
  addCard (state, { sectionId }) {
    state.sections.forEach(section => {
      if (sectionId === section.id) {
        let card = Object.assign({ id: section.cards.length, createDate: new Date().toLocaleString() }, state.cardForm)
        section.cards.push(card)
      }
    })
  }
}

// 用于更改状态的action函数，能获取异步数据
const actions = {

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
