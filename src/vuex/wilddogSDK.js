import wilddog from 'wilddog'

const wilddogServer = wilddog.initializeApp({
  authDomain: 'wd.wilddog.com',
  syncURL: 'https://wd.wilddogio.com/'
})

export default wilddogServer
