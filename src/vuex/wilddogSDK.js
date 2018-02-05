import wilddog from 'wilddog'

const wilddogServer = wilddog.initializeApp({
  authDomain: 'wd.wilddog.com',
  syncURL: 'https://wd.wilddogio.com/'
})

const sync = wilddogServer.sync()
let uid
let sections = []

export function login (formData) {
  wilddogServer.auth().signInWithEmailAndPassword(formData.email, formData.password)
    .then(function (res) {
      formData.callback ? formData.callback() : ''
      uid = wilddogServer.auth().currentUser.uid
    }).catch(function (error) {
      // 错误处理
      console.error(error)
    })
}

export function getSections (callback) {
  sync.ref(`${uid}/sections`).on('value', function (snapshot) {
    let data = snapshot.val()
    if (data) {
      for (let sectionKey of Object.keys(data)) {
        let section = Object.assign({key: sectionKey}, data[sectionKey])
        if (section.cards) {
          let cardList = []
          for (let cardKey of Object.keys(section.cards)) {
            let card = Object.assign({key: cardKey}, section.cards[cardKey])
            cardList.push(card)
          }
          section.cards = cardList
        }
        sections.push(section)
      }
    }

    callback(sections)
  })
}
export function postSection (section, callback) {
  sync.ref(`${uid}/sections`).push(section)
}
export function postCard (sectionKey, cardTitle, callback) {
  let card = {
    createDate: new Date().toLocaleString()
  }
  card = Object.assign(card, {title: cardTitle})
  sync.ref(`${uid}/sections/${sectionKey}/cards`).push(card)
}
export function updateCardParentSection (cardKey, oldSectionKey, newSectionKey, callback) {
  let cardData = sections[oldSectionKey].cards[cardKey]
  sync.ref(`${uid}/sections`).update({
    [`${oldSectionKey}/cards/${cardKey}`]: null,
    [`${newSectionKey}/cards/${cardKey}`]: cardData
  })
}
