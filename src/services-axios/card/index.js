import api from '../axios'

export default {
  // 新建card
  apiCreateCard: params => api.post('/api/card', params),
  // 改变card属性
  apiUpdateCard: params => api.put('/api/card', params),
  // 删除card
  apiDeleteCard: params => api.delete('/api/card', { params }),
  // 增加card中某个list
  apiCreateListItem: params => api.post('/api/listItem', params),
  // 更新card中某个list
  apiUpdateListItem: params => api.put('/api/listItem', params),
  // 删除card中某个list的某个item
  apiDeleteListItem: params => api.delete('/api/listItem', { params }),
}
