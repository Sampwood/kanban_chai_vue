import axios from 'axios'
import cookie from 'js-cookie'
import Router from '@/router'

// const CancelToken = axios.CancelToken
const api = axios.create({
  baseURL: process.env.API_LOCATION,
  timeout: 30000, // 超时时间
  responseType: 'json', // default
  headers: {
    'Content-Type': 'application/json'
  },
  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved otherwise, the promise will be
  // rejected.
  validateStatus: status => status === 200
})
// const pendingList = []
// const removePending = (config, cancel) => {
//   const flagUrl = `${config.url}&${config.method}`
//   if (pendingList.includes(flagUrl)) {
//     if (cancel) {
//       cancel() // 执行取消操作
//     } else {
//       pendingList.splice(pendingList.indexOf(flagUrl), 1)// 把这条记录从数组中移除
//     }
//   } else if (cancel) {
//     pendingList.push(flagUrl)
//   }
// }
api.interceptors.request.use((config) => {
  const token = cookie.get('token')
  if (token) {
    config.headers.token = token
  }
  // config.cancelToken = new CancelToken((cancel) => {
  //   removePending(config, cancel)
  // })
  return config
}, error => Promise.reject(error))

api.interceptors.response.use((res) => {
  const status = res.status
  // removePending(res.config)
  if (res.headers['content-type'] && res.headers['content-type'].indexOf('application/x-download') !== -1) {
    return res
  }
  if (res.config && res.config.responseType === 'arraybuffer') {
    return res
  }
  if (/^2\d{2}/.test(status)) {
    const data = res.data
    const code = parseInt(data.code, 10)
    // 登录超时
    if (code === 300001) {
      Router.push('/')
    } else if (code === 0) { // 成功 code === 0
      return data.data
    }
  }
  return false
}, () => Promise.reject('网络出错，请稍后再试~'))

export default api
