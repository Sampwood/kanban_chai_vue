import cookie from 'js-cookie'
import * as types from './mutation-types.js'
import services from '~services/auth'

export default {
  namespaced: true,
  state: {
    account: {}, // 登陆用户信息
    isLogin: false,
  },
  getters: {
    userIsLogin (state) {
      return state.isLogin
    },
  },
  mutations: {
    [types.USER_LOGIN] (state, account) {
      state.isLogin = true
      cookie.set('token', account.token, { expires: 7 })
    },
    [types.USER_LOGOUT] (state) {
      state.account = {}
      state.isLogin = false
      sessionStorage.removeItem('account')
    },
    [types.USER_SET_INFO] (state, account) {
      state.account = account
      sessionStorage.setItem('account', JSON.stringify(account))

      cookie.set('username', account.username, { expires: 7 })
      cookie.set('userId', account.userId, { expires: 7 })
    },
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
      commit(types.USER_SET_INFO, data)
      return data
    },
  },
}
