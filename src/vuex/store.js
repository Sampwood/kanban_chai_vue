import Vue from 'vue'
import Vuex from 'vuex'
import wilddogServer from './wilddogSDK'

// 获取数据
// import data from './dataServer'
const sync = wilddogServer.sync()

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
  addCard (state, { section, card }) {
    section.cards.push(card)
  }
}

// 用于更改状态的action函数，能获取异步数据
const actions = {
  loginAction (context, formData) {
    wilddogServer.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then(function (res) {
        formData.callback ? formData.callback() : ''
      }).catch(function (error) {
        // 错误处理
        console.error(error)
      })
  },
  getSections ({ commit }) {
    sync.ref('board/sections').on('value', function (snapshot) {
      commit('initSections', snapshot.val() ? snapshot.val() : [])
    })
  },
  postSection (context, section) {
    sync.ref('board/sections').push(section)
  },
  postCard ({ state }, { sectionKey }) {
    let card = {
      createDate: new Date().toLocaleString()
    }
    card = Object.assign(card, state.cardForm)
    sync.ref(`board/sections/${sectionKey}/cards`).push(card)
  },
  updateCardParentSection ({ state }, {cardKey, oldSectionKey, newSectionKey}) {
    let cardData = state.sections[oldSectionKey].cards[cardKey]
    sync.ref('board/sections/').update({
      [`${oldSectionKey}/cards/${cardKey}`]: null,
      [`${newSectionKey}/cards/${cardKey}`]: cardData
    })
  }
}

// 用于获取state的值
const getters = {
  getterSections (state) {
    let data = state.sections
    let sections = []
    if (data) {
      for (let sectionKey of Object.keys(data)) {
        let section = Object.assign({key: sectionKey}, data[sectionKey])
        if (section.cards) {
          let cardList = []
          for (let cardKey of Object.keys(section.cards)) {
            let card = Object.assign({key: cardKey}, section.cards[cardKey])
            cardList.push(card)
          }
          section.cards = cardList
        }
        sections.push(section)
      }
    }
    return sections
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
