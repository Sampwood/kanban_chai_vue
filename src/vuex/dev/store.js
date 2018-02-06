import Vue from 'vue'
import Vuex from 'vuex'

import { CARD } from '../data-type.js'

Vue.use(Vuex)

import dashboardData from './dataServer'

// 创建一个对象来保存应用启动时的初始状态
const state = {
  sections: dashboardData.sections,
  cardForm: {
    key: '1',
    category: 'Feature',
    title: '',
    description: ''
  },
  isShowDetail: false,
  asideDetail: {
    isShow: false,
    type: '',
    key: ''
  }
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
  updateShowDetail (state, detailData) {
    if (detailData.type === CARD) {
      let key = detailData.sectionKey + '-' + detailData.cardKey
      if (detailData.type === state.asideDetail.type && key === state.asideDetail.key) {
        state.asideDetail.isShow = false
        state.asideDetail.type = ''
        state.asideDetail.key = ''
      } else {
        state.asideDetail.isShow = true
        state.asideDetail.type = detailData.type
        state.asideDetail.key = key
      }
    }
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
    return state.asideDetail.isShow
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
