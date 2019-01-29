import api from '../axios'

export default {
  // 注册
  apiRegister: params => api.post('/api/register', params),
  // 登陆
  apiLogin: params => api.post('/api/login', params),
  // 登出
  apiLogout: () => api.post('/api/logout'),
  // 获取用户信息
  apiGetUserInfo: params => api.post('/api/getUserInfo', params),
}
