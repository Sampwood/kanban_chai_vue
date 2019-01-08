import cookie from 'js-cookie'
import * as types from './mutation-types.js'
import services from '@/services'

export default {
  namespaced: true,
  state: {
    account: {}, // 登陆用户信息
    isLogin: false
  },
  getters: {
    userIsLogin (state) {
      return state.isLogin
    }
  },
  mutations: {
    [types.USER_LOGIN] (state, account) {
      state.account = account
      state.isLogin = true
      cookie.set('token', account.token, { expires: 7 })
      cookie.set('username', account.username, { expires: 7 })
      sessionStorage.setItem('account', JSON.stringify(account))
    },
    [types.USER_LOGOUT] (state) {
      state.account = {}
      state.isLogin = false
    }
  },
  actions: {
    register ({ commit }, params) {
      return services.apiRegister(params)
    },
    async login ({ commit }, params) {
      const data = await services.apiLogin(params)
      commit(types.USER_LOGIN, data)
      return data
    },
    async logout ({ commit }) {
      const data = await services.apiLogout()
      commit(types.USER_LOGOUT)
      return data
    },
    async getUserInfo ({commit}, params) {
      const data = await services.apiGetUserInfo(params)
      commit(types.USER_LOGIN, data)
      return data
    }
  }
}
