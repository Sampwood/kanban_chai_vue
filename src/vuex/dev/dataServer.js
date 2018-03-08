const cardDemo = function () {
  return {
    key: '0',
    title: 'Special title treatment',
    description: 'With supporting text below as a natural lead-in to additional content.',
    pipNum: -1,
    colourTagNum: 1,
    bgColorNum: -1,
    priority: 1,
    assignee: null,
    startDate: new Date(),
    dueDate: null,
    estimate: 0,
    spendTime: 0,
    checklist: [],
    tags: [],
    attachments: [],
    comments: [],
    activity: [
      {
        type: 'created new card',
        time: new Date(),
        content: null
      }
    ]
  }
}

const dashboardData = {
  sections: [
    {
      key: '0',
      title: 'To Do',
      cards: [cardDemo()]
    },
    {
      key: '1',
      title: 'Ongoing',
      cards: [cardDemo()]
    },
    {
      key: '2',
      title: 'Blocked',
      cards: [cardDemo()]
    },
    {
      key: '3',
      title: 'Done',
      cards: [cardDemo()]
    }
  ],
  show: true,
  sectionTitle: ''
}

const getSection = function (sectionKey) {
  return dashboardData.sections.filter(section => section.key === sectionKey)[0]
}
const getCard = function (sectionKey, cardKey) {
  let section = getSection(sectionKey)
  if (!section) {
    return
  }
  return section.cards.filter(card => card.key === cardKey)[0]
}

export function auth () {
  return {currentUser: 'Sampwood'}
}
export function login (formData) {
  // TODO
}
export function getSections (callback) {
  callback(dashboardData.sections)
}
export function postSection (section, callback) {
  dashboardData.sections.push(section)
  callback()
}
export function postCard (sectionKey, cardTitle, callback) {
  let section = getSection(sectionKey)
  let newKey = new Date().getTime() + ''
  let card = {
    title: cardTitle,
    key: newKey,
    createDate: new Date().toLocaleString()
  }
  card = Object.assign(cardDemo, card)
  section.cards.push(card)
  callback()
}
export function updateCardParentSection (cardKey, oldSectionKey, newSectionKey, callback) {
  let cards = getSection(oldSectionKey).cards
  let card
  let newSection = getSection(newSectionKey)
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].key === cardKey) {
      card = cards[i]
      cards.splice(i, 1)
    }
  }
  if (card) {
    newSection.cards.push(card)
  }
  callback()
}
export function updateCardData (sectionKey, cardKey, key, value, callback) {
  let card = getCard(sectionKey, cardKey)
  card[key] = value
  callback()
}
export function deleteCard (sectionKey, cardKey) {
  let section = getSection(sectionKey)
  for (let i = 0; i < section.cards.length; i++) {
    if (section.cards[i].key === cardKey) {
      section.cards.splice(i, 1)
      break
    }
  }
}
export function postListInCard (sectionKey, cardKey, key, item, callback) {
  let card = getCard(sectionKey, cardKey)
  card[key].push(Object.assign({id: new Date().getTime()}, item))
  callback()
}
export function deleteListInCard (sectionKey, cardKey, key, id, callback) {
  let card = getCard(sectionKey, cardKey)
  for (let i = 0; i < card[key].length; i++) {
    if (card[key][i].id === id) {
      card[key].splice(i, 1)
      break
    }
  }
  callback()
}
