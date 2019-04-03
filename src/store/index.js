import Vue from 'vue'
import Vuex from 'vuex'

import dashboardService from '~services/dashboard'
import sectionService from '~services/section'
import cardService from '~services/card'
import { CARD, CLOSE } from '@/config/data-type.js'
import auth from './auth'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  dashboards: [],
  activeDashboard: '',
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
  initDashboards (state, dashboards) {
    state.dashboards = dashboards
    if (dashboards.length) {
      state.activeDashboard = dashboards[0].id
      state.sections = dashboards[0].sections || []
    }
  },
  addDashboard (state, dashboard) {
    if (dashboard) state.dashboards.push(dashboard)
    if (state.dashboards.length === 1) {
      state.activeDashboard = dashboard.id
      state.sections = dashboard.sections || []
    }
  },
  updateActiveDashboard (state, dashboardId) {
    state.activeDashboard = dashboardId
    state.sections = state.dashboards.filter(item => item.id === dashboardId)[0].sections || []
  },
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
  async getDashboards ({ commit }) {
    const resData = await dashboardService.apiGetDashboards()
    commit('initDashboards', resData || [])
  },
  async postDashboard ({ commit }, dashboard) {
    const resData = await dashboardService.apiCreateDashboard(dashboard)
    commit('addDashboard', resData)
  },
  async getSections ({ commit }) {
    const resData = await sectionService.apiGetSections()
    commit('initSections', resData || [])
  },
  async postSection ({ state, commit }, section) {
    const dashboardId = state.activeDashboard
    const resData = await sectionService.apiCreateSection(Object.assign({ dashboardId }, section))
    commit('addSection', resData.section)
  },
  async postCard ({ state, commit }, { sectionKey, cardTitle }) {
    const dashboardId = state.activeDashboard
    const resData = await cardService.apiCreateCard({ dashboardId, sectionKey, title: cardTitle })
    commit('addCard', { sectionKey, card: resData.card })
  },
  async updateCardParentSection ({ state, commit }, {cardKey, oldSectionKey, newSectionKey}) {
    console.log(state.activeDashboard)
    const oldSection = state.sections.find(section => section.key === oldSectionKey)
    const card = oldSection.cards.find(card => card.key === cardKey)
    const resData = await cardService.apiUpdateCard({ card, sectionKey: newSectionKey, oldSectionKey })
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
  async deleteListInCard ({ commit }, {sectionKey, card, listName, id}) {
    const resData = await cardService.apiDeleteListItem({ sectionKey, card, listName, id })
    commit('updateCard', { sectionKey, card: resData.card })
  },
}

// 用于获取state的值
const getters = {
  getterDashboards (state) {
    return state.dashboards
  },
  getterActiveDashboard (state) {
    return state.activeDashboard
  },
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
