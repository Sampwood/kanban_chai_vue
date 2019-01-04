import api from './axios'

export default {
  // 注册
  apiRegister: params => api.post('/register', params),
  // 登陆
  apiLogin: params => api.post('/login', params),
  // 登出
  apiLogout: () => api.post('/logout')
}
