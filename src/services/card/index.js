import getIndexedDB from '../indexedDB'

export default {
  // 新建card
  apiCreateCard: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        if (!params.sectionKey) return

        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')
        const request = objectStore.get(params.sectionKey)

        transaction.onerror = function (event) {
          console.log('新建card失败')
          reject({
            message: '新建card失败',
          })
        }

// TODO: card.attachments的值
// attachments: [{
//   id: 0,
//   name: 'avatar.jpg',
//   isPin: true,
//   path: '../../assets/img/zoro.jpg',
//   uploadDate: new Date(),
// }]
        request.onsuccess = function (event) {
          const section = event.target.result
          const card = {
            key: Date.now(),
            title: params.title || 'new card',
            createDate: new Date(),
            description: null,
            pipNum: null,
            colourTagNum: null,
            bgColorNum: null,
            priority: 0,
            assignee: null,
            startDate: null,
            dueDate: null,
            estimate: null,
            spendTime: null,
            isDone: false,
            checklist: [],
            tags: [],
            attachments: [],
            comments: [],
            activity: [{
              type: 'created new card',
              time: new Date(),
              content: null,
            }],
          }
          section.cards.push(card)

          objectStore.put(section).onsuccess = function (event) {
            console.log('新建card成功')
            resolve({ card })
          }
        }
      }, reject)
    })
  },
  // 改变card属性
  apiUpdateCard: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        if (!params.sectionKey || !params.card) return
        if (params.key && params.value !== undefined) {
          params.card[params.key] = params.value
        }

        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')

        objectStore.get(params.sectionKey).onsuccess = function (event) {
          const section = event.target.result
          if (params.oldSectionKey) {
            section.cards.push(params.card)
            objectStore.get(params.oldSectionKey).onsuccess = function (event) {
              const oldSection = event.target.result
              const index = oldSection.cards.findIndex(item => item.key === params.card.key)
              oldSection.cards.splice(index, 1)

              objectStore.put(oldSection)
            }
          } else {
            const index = section.cards.findIndex(item => item.key === params.card.key)
            section.cards.splice(index, 1, params.card)
          }
          objectStore.put(section)
        }

        transaction.onerror = function (event) {
          console.log('改变card属性失败')
          reject({
            message: '改变card属性失败',
          })
        }
        transaction.oncomplete = function (event) {
          console.log('改变card属性成功')
          resolve({
            card: params.card,
          })
        }
      }, reject)
    })
  },
  // 删除card
  apiDeleteCard: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        if (!params.sectionKey || !params.cardKey) return

        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')
        objectStore.get(params.sectionKey).onsuccess = function (event) {
          const section = event.target.result
          const index = section.cards.findIndex(item => item.key === params.cardKey)
          section.cards.splice(index, 1)

          objectStore.put(section)
        }

        transaction.onerror = function (event) {
          console.log('删除card失败', event)
          reject({
            message: '删除card失败',
          })
        }
        transaction.oncomplete = function (event) {
          console.log('删除card成功')
          resolve()
        }
      }, reject)
    })
  },
  // 增加card中某个list
  apiCreateListItem: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        if (!params.sectionKey || !params.card || !params.listName || !params.item) return
        const item = params.item
        item.id = Date.now() + Math.random()
        params.card[params.listName] = [item]

        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')
        objectStore.get(params.sectionKey).onsuccess = function (event) {
          const section = event.target.result
          const index = section.cards.findIndex(item => item.key === params.card.key)
          section.cards.splice(index, 1, params.card)

          objectStore.put(section)
        }

        transaction.onerror = function (event) {
          console.log('增加card中某个list失败', event)
          reject({
            message: '增加card中某个list失败',
          })
        }
        transaction.oncomplete = function (event) {
          console.log('增加card中某个list成功')
          resolve({
            card: params.card,
          })
        }
      }, reject)
    })
  },
  // 更新card中某个list
  apiUpdateListItem: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        if (!params.sectionKey || !params.card) return
        if (params.listName && params.id && params.key && params.value !== undefined) {
          const item = params.card[params.listName].find(item => item.id === params.id)
          item[params.key] = params.value
        }

        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')
        objectStore.get(params.sectionKey).onsuccess = function (event) {
          const section = event.target.result
          const index = section.cards.findIndex(item => item.key === params.card.key)
          section.cards.splice(index, 1, params.card)

          objectStore.put(section)
        }

        transaction.onerror = function (event) {
          console.log('更新card中某个list失败', event)
          reject({
            message: '更新card中某个list失败',
          })
        }
        transaction.oncomplete = function (event) {
          console.log('更新card中某个list成功')
          resolve({
            card: params.card,
          })
        }
      }, reject)
    })
  },
  // 删除card中某个list的某个item
  apiDeleteListItem: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        if (!params.sectionKey || !params.card) return
        if (params.listName && params.id) {
          const index = params.card[params.listName].findIndex(item => item.id === params.id)
          params.card[params.listName].splice(index, 1)
        }

        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')
        objectStore.get(params.sectionKey).onsuccess = function (event) {
          const section = event.target.result
          const index = section.cards.findIndex(item => item.key === params.card.key)
          section.cards.splice(index, 1, params.card)

          objectStore.put(section)
        }

        transaction.onerror = function (event) {
          console.log('删除card中某个list的某个item失败', event)
          reject({
            message: '删除card中某个list的某个item失败',
          })
        }
        transaction.oncomplete = function (event) {
          console.log('删除card中某个list的某个item成功')
          resolve({
            card: params.card,
          })
        }
      }, reject)
    })
  },
}
