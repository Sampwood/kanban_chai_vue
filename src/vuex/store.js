import Vue from 'vue'
import Vuex from 'vuex'

// import * as server from './wilddogSDK'
import * as server from './dev/dataServer'
import { CARD, CLOSE } from './data-type.js'

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
  asideDetail: {
    isShow: false,
    type: '',
    sectionKey: '',
    cardKey: ''
  }
}

// 用于更改状态的mutation函数，但只能进行同步操作
const mutations = {
  initSections (state, sections) {
    state.sections = sections
    console.log(sections)
  },
  updateCardForm (state, { key, value }) {
    state.cardForm[key] = value
  },
  addCard (state, { section, card }) {
    section.cards.push(card)
  },
  updateShowDetail (state, detailData) {
    if (detailData.type === CLOSE) {
      Object.assign(state.asideDetail, {isShow: false, type: '', sectionKey: '', cardKey: ''})
    } else if (detailData.type === CARD) {
      if (detailData.type === state.asideDetail.type && detailData.sectionKey === state.asideDetail.sectionKey &&
          detailData.cardKey === state.asideDetail.cardKey) {
        Object.assign(state.asideDetail, {isShow: false, type: '', sectionKey: '', cardKey: ''})
      } else {
        state.asideDetail.isShow = true
        state.asideDetail.type = detailData.type
        state.asideDetail.sectionKey = detailData.sectionKey
        state.asideDetail.cardKey = detailData.cardKey
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
  },
  updateCardData ({ dispatch }, {sectionKey, cardKey, key, value}) {
    server.updateCardData(sectionKey, cardKey, key, value, () => dispatch('getSections'))
  },
  deleteCard ({ dispatch }, {sectionKey, cardKey}) {
    server.deleteCard(sectionKey, cardKey, () => dispatch('getSections'))
  },
  postListInCard ({dispatch}, {sectionKey, cardKey, listName, item}) {
    server.postListInCard(sectionKey, cardKey, listName, item, () => dispatch('getSections'))
  },
  updateListInCard ({dispatch}, {sectionKey, cardKey, listName, id, key, value}) {
    server.updateListInCard(sectionKey, cardKey, listName, id, key, value, () => dispatch('getSections'))
  },
  deleteListInCard ({dispatch}, {sectionKey, cardKey, listName, id}) {
    server.deleteListInCard(sectionKey, cardKey, listName, id, () => dispatch('getSections'))
  }
}

// 用于获取state的值
const getters = {
  getterSections (state) {
    return state.sections
  },
  getterShowDetail (state) {
    return state.asideDetail
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
