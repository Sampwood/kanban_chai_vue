import api from '../axios'

export default {
  // 获取Dashboards
  apiGetDashboards: () => api.get('/api/dashboard'),
  // 新建Dashboard
  apiCreateDashboard: params => api.post('/api/dashboard', params),
}
