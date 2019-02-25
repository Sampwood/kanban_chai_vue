import getIndexedDB from '../indexedDB'

export default {
  // 注册
  apiRegister: params => {
    console.log(params)
  },
  // 登陆
  apiLogin: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        let request = db.transaction(['person'], 'readwrite')
          .objectStore('person')
          .put({ username: params.username, password: params.password })

        request.onsuccess = function (event) {
          console.log('数据更新成功')
          resolve({
            username: params.username,
            token: 'sampwood.helloworld',
          })
        }

        request.onerror = function (event) {
          console.log('数据更新失败')
          reject({
            message: '数据更新失败',
          })
        }
      }, reject, params.username)
    })
  },
  // 登出
  apiLogout: () => Promise.resolve(),
  // 获取用户信息
  apiGetUserInfo: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        const transaction = db.transaction(['person'])
        const objectStore = transaction.objectStore('person')
        const request = objectStore.index('username').get(params.username)

        request.onerror = function (event) {
          console.log('事务失败')
          reject({
            message: '事务失败',
          })
        }

        request.onsuccess = function (event) {
          console.log(event.target.result)
          resolve(event.target.result)
        }
      }, reject, params.username)
    })
  },
}
