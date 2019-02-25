import getIndexedDB from '../indexedDB'

export default {
  // 新建card
  apiCreateCard: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        resolve({
          card: {
            key: Date.now(),
            title: params.title || 'new card',
            createDate: new Date(),
            activity: [{
              type: 'created new card',
              time: new Date(),
              content: null,
            }],
            checklist: [],
          },
        })
      }, reject)
    })
  },
  // 改变card属性
  apiUpdateCard: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        const data = params.card || {
          key: Date.now(),
          title: 'new card',
          createDate: new Date(),
        }
        if (params.key && params.value) {
          data[params.key] = params.value
        }
        resolve({
          card: data,
        })
      }, reject)
    })
  },
  // 删除card
  apiDeleteCard: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        resolve()
      }, reject)
    })
  },
  // 增加card中某个list
  apiCreateListItem: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        const data = params.card || {
          key: Date.now(),
          title: 'new card',
          createDate: new Date(),
        }
        if (params.listName && params.item) {
          const item = params.item
          item.id = Date.now() + Math.random()
          data[params.listName] = [item]
        }
        resolve({
          card: data,
        })
      }, reject)
    })
  },
  // 更新card中某个list
  apiUpdateListItem: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        let data = {
          key: Date.now(),
          title: 'new card',
          createDate: new Date(),
        }
        if (params.card && params.listName && params.id && params.key && params.value) {
          data = params.card
          const item = data[params.listName].find(item => item.id === params.id)
          item[params.key] = params.value
        }
        resolve({
          card: data,
        })
      }, reject)
    })
  },
  // 删除card中某个list的某个item
  apiDeleteListItem: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        resolve()
      }, reject)
    })
  },
}
