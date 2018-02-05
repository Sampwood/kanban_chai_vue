import Vue from 'vue'
import Vuex from 'vuex'

import * as wilddogServer from './wilddogSDK'
import * as staticDataServer from './dev/dataServer'
import { CARD } from './data-type.js'

// 获取数据
let server

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  sections: [],
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
  initSections (state, sections) {
    state.sections = sections
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
    server.login(formData)
  },
  getSections ({ commit }) {
    server.getSections(function (snapshot) {
      commit('initSections', snapshot || [])
    })
  },
  postSection ({ dispatch }, section) {
    server.postSection(section, () => dispatch('getSections'))
  },
  postCard ({ dispatch }, { sectionKey, cardTitle }) {
    server.postCard(sectionKey, cardTitle, () => dispatch('getSections'))
  },
  updateCardParentSection ({ dispatch }, {cardKey, oldSectionKey, newSectionKey}) {
    server.updateCardParentSection(cardKey, oldSectionKey, newSectionKey, () => dispatch('getSections'))
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

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default function (env) {
  if (env === 'pro') {
    server = wilddogServer
  } else {
    server = staticDataServer
  }
  return store
}
