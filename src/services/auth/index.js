import getIndexedDB from '../indexedDB'

export default {
  // 注册
  apiRegister: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        let request = db.transaction(['person'], 'readwrite')
          .objectStore('person')
          .add({ username: params.username, password: params.password })

        request.onsuccess = function (event) {
          console.log('注册用户成功')
          resolve({
            username: params.username,
            password: params.password,
          })
        }

        request.onerror = function (event) {
          console.log('注册用户失败', event)
          reject({
            message: '注册用户失败',
          })
        }
      }, reject, params.username)
    })
  },
  // 登陆
  apiLogin: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        const transaction = db.transaction(['person'])
        const objectStore = transaction.objectStore('person')
        const request = objectStore.index('username').get(params.username)

        request.onerror = function (event) {
          console.log('获取用户信息失败', event)
          reject({
            message: '获取用户信息失败',
          })
        }

        request.onsuccess = function (event) {
          console.log('获取用户信息成功')
          const userInfo = event.target.result

          if (userInfo && userInfo.username === params.username && userInfo.password === params.password) {
            resolve({
              username: params.username,
              token: 'sampwood.helloworld',
              userId: userInfo.id,
            })
          } else {
            reject({
              message: '用户名或密码错误',
            })
          }
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
          console.log('获取用户信息失败', event)
          reject({
            message: '获取用户信息失败',
          })
        }

        request.onsuccess = function (event) {
          console.log('获取用户信息成功')
          resolve(event.target.result)
        }
      }, reject, params.username)
    })
  },
}
