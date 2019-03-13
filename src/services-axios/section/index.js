import api from '../axios'

export default {
  // 获取sections
  apiGetSections: () => api.get('/api/getSections'),
  // 新建section
  apiCreateSection: params => api.post('/api/createSection', params),
}
