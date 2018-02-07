const cardDemo = {
  key: '0',
  title: 'Special title treatment',
  description: 'With supporting text below as a natural lead-in to additional content.',
  pipNum: -1,
  colourLabelNum: 1,
  priority: 0,
  assignee: null,
  startDate: null,
  dueDate: null,
  estimate: 0,
  spendTime: 0,
  items: [],
  tags: [],
  attachments: [],
  comments: [],
  activity: [
    {
      type: 'created new card',
      time: new Date().toLocaleString(),
      content: null
    }
  ]
}

const dashboardData = {
  sections: [
    {
      key: '0',
      title: 'To Do',
      cards: [Object.assign({}, cardDemo)]
    },
    {
      key: '1',
      title: 'Ongoing',
      cards: [Object.assign({}, cardDemo)]
    },
    {
      key: '2',
      title: 'Blocked',
      cards: [Object.assign({}, cardDemo)]
    },
    {
      key: '3',
      title: 'Done',
      cards: [Object.assign({}, cardDemo)]
    }
  ],
  show: true,
  sectionTitle: ''
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
  let card = {
    createDate: new Date().toLocaleString()
  }
  let section = dashboardData.sections.filter(section => section.key === sectionKey)[0]
  let newKey = section.cards.length + 1 + ''
  card = Object.assign(card, {title: cardTitle, key: newKey})
  section.cards.push(card)
  callback()
}
export function updateCardParentSection (cardKey, oldSectionKey, newSectionKey, callback) {
  let card
  let newSection
  for (let section of dashboardData.sections) {
    if (section.key === oldSectionKey) {
      for (let i = 0; i < section.cards.length; i++) {
        if (section.cards[i].key === cardKey) {
          card = section.cards[i]
          section.cards.splice(i, 1)
        }
      }
    }
    if (section.key === newSectionKey) {
      newSection = section
    }
  }
  if (card) {
    newSection.cards.push(card)
  }
  callback()
}
export function updateCardData (cardData, callback) {
  callback()
}
