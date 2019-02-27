import cookie from 'js-cookie'

let db
let currentUser

export default function getIndexedDB (resolve, reject, username, version) {
  username = username || cookie.get('username')

  if (db && currentUser === username) return resolve(db)

  let request = window.indexedDB.open(username, version)
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

    let objectStore
    // 建表： person表
    if (!db.objectStoreNames.contains('person')) {
      objectStore = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true })
      objectStore.createIndex('username', 'username', { unique: true })
    }
    // 建表： section表
    if (!db.objectStoreNames.contains('section')) {
      objectStore = db.createObjectStore('section', { keyPath: 'key', autoIncrement: true })
      objectStore.createIndex('userId', 'userId', { unique: false })
    }
  }
}
