import cookie from 'js-cookie'
import getIndexedDB from '../indexedDB'

export default {
  // 获取sections
  apiGetSections: () => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        const userId = Number(cookie.get('userId'))
        const request = db.transaction(['section'])
          .objectStore('section')
          .index('userId').getAll(userId)

        request.onerror = function (event) {
          console.log('获取sections信息失败', event)
          reject({
            message: '获取sections信息失败',
          })
        }

        request.onsuccess = function (event) {
          console.log('获取列表信息成功')
          resolve(event.target.result)
        }
      }, reject)
    })
  },
  // 新建section
  apiCreateSection: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        const userId = Number(cookie.get('userId'))
        const transaction = db.transaction(['section'], 'readwrite')
        const objectStore = transaction.objectStore('section')
        objectStore.add({ title: params.title, cards: [], userId }).onsuccess = function (event) {
          objectStore.get(event.target.result).onsuccess = function (event) {
            console.log('新增section成功')
            resolve({
              section: event.target.result,
            })
          }
        }

        transaction.onerror = function (event) {
          console.log('新增section失败', event)
          reject({
            message: '新增section失败',
          })
        }
      }, reject)
    })
  },
}
