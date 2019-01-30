import api from '../axios'

export default {
  // 新建card
  apiCreateCard: params => api.post('/api/createCard', params),
  // 改变card属性
  apiUpdateCard: params => api.put('/api/updateCard', params),
  // 删除card
  apiDeleteCard: params => api.delete(`/api/deleteCard/${params.sectionKey}/${params.cardKey}`),
  // 增加card中某个list
  apiCreateListItem: params => api.post('/api/createListItem', params),
  // 更新card中某个list
  apiUpdateListItem: params => api.put('/api/updateListItem', params),
  // 删除card中某个list的某个item
  apiDeleteListItem: params => api.delete(`/api/deleteListItem/${params.sectionKey}/${params.cardKey}/${params.listName}/${params.id}`),
}
