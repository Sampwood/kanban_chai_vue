import cookie from 'js-cookie'

let db
let currentUser

export default function getIndexedDB (resolve, reject, username) {
  username = username || cookie.get('username')

  if (db && currentUser === username) return resolve(db)

  let request = window.indexedDB.open(username)
  request.onerror = function (event) {
    console.log('数据库打开报错', event)
    reject({
      message: '数据库打开报错',
    })
  }
  request.onsuccess = function (event) {
    db = request.result
    currentUser = username
    console.log('数据库打开成功')
    resolve(db)
  }
  request.onupgradeneeded = function (event) {
    db = event.target.result
    currentUser = username
    console.log('数据库升级成功')
    // 建表： person表
    if (!db.objectStoreNames.contains('person')) {
      const objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true })
      objectStore.createIndex('username', 'username', { unique: true })
    }
  }
}
