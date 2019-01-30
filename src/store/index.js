import Vue from 'vue'
import Vuex from 'vuex'

import sectionService from '@/services/section'
import cardService from '@/services/card'
import { CARD, CLOSE } from '@/config/data-type.js'
import auth from './auth'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  sections: [],
  cardForm: {
    key: '1',
    category: 'Feature',
    title: '',
    description: '',
  },
  asideDetail: {
    isShow: false,
    type: '',
    sectionKey: '',
    cardKey: '',
  },
}

// 用于更改状态的mutation函数，但只能进行同步操作
const mutations = {
  initSections (state, sections) {
    state.sections = sections
  },
  addSection (state, section) {
    if (section) state.sections.push(section)
  },
  updateCardForm (state, { key, value }) {
    state.cardForm[key] = value
  },
  addCard (state, { sectionKey, card }) {
    const section = state.sections.find(section => section.key === sectionKey)
    section.cards.push(card)
  },
  updateCardParentSection (state, { card, oldSectionKey, newSectionKey }) {
    const newSection = state.sections.find(section => section.key === newSectionKey)
    const cards = state.sections.find(section => section.key === oldSectionKey).cards
    const index = cards.findIndex(item => item.key === card.key)
    cards.splice(index, 1)
    newSection.cards.push(card)
  },
  updateCard (state, { card, sectionKey }) {
    const section = state.sections.find(section => section.key === sectionKey)
    const cards = section.cards
    const index = cards.findIndex(item => item.key === card.key)
    cards.splice(index, 1, card)
  },
  deleteCard (state, { cardKey, sectionKey }) {
    const section = state.sections.find(section => section.key === sectionKey)
    const cards = section.cards
    const index = cards.findIndex(card => card.key === cardKey)
    cards.splice(index, 1)
  },
  deleteItemInCardList (state, { sectionKey, cardKey, listName, id }) {
    const section = state.sections.find(section => section.key === sectionKey)
    const list = section.cards.find(card => card.key === cardKey)[listName]
    const index = list.findIndex(item => item.id === id)
    list.splice(index, 1)
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
  },
}

// 用于更改状态的action函数，能获取异步数据
const actions = {
  async getSections ({ commit }) {
    const resData = await sectionService.apiGetSections()
    commit('initSections', resData || [])
  },
  async postSection ({ commit }, section) {
    const resData = await sectionService.apiCreateSection(section)
    commit('addSection', resData.section)
  },
  async postCard ({ commit }, { sectionKey, cardTitle }) {
    const resData = await cardService.apiCreateCard({ sectionKey, title: cardTitle })
    commit('addCard', { sectionKey, card: resData.card })
  },
  async updateCardParentSection ({ state, commit }, {cardKey, oldSectionKey, newSectionKey}) {
    const oldSection = state.sections.find(section => section.key === oldSectionKey)
    const card = oldSection.cards.find(card => card.key === cardKey)
    const resData = await cardService.apiUpdateCard({ card, sectionKey: newSectionKey })
    commit('updateCardParentSection', { card: resData.card, oldSectionKey, newSectionKey })
  },
  async updateCardData ({ commit }, { card, sectionKey, key, value }) {
    const resData = await cardService.apiUpdateCard({ card, sectionKey, key, value })
    commit('updateCard', { card: resData.card, sectionKey })
  },
  async deleteCard ({ commit }, { sectionKey, cardKey }) {
    await cardService.apiDeleteCard({ sectionKey, cardKey })
    commit('deleteCard', { sectionKey, cardKey })
  },
  async postListInCard ({ commit }, {sectionKey, card, listName, item}) {
    const resData = await cardService.apiCreateListItem({ sectionKey, card, listName, item })
    commit('updateCard', { card: resData.card, sectionKey })
  },
  async updateListInCard ({ commit }, {sectionKey, card, listName, id, key, value}) {
    const resData = await cardService.apiUpdateListItem({ sectionKey, card, listName, id, key, value })
    commit('updateCard', { card: resData.card, sectionKey })
  },
  async deleteListInCard ({ commit }, {sectionKey, cardKey, listName, id}) {
    await cardService.apiDeleteListItem({ sectionKey, cardKey, listName, id })
    commit('deleteItemInCardList', { sectionKey, cardKey, listName, id })
  },
}

// 用于获取state的值
const getters = {
  getterSections (state) {
    return state.sections
  },
  getterShowDetail (state) {
    return state.asideDetail
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
  },
})
