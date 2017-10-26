const card = {
  id: 0,
  title: 'Special title treatment',
  description: 'With supporting text below as a natural lead-in to additional content.',
  createDate: new Date().toLocaleString()
}

export default {
  sections: [
    {
      id: 0,
      title: 'To Do',
      cards: [Object.assign({}, card)]
    },
    {
      id: 1,
      title: 'Ongoing',
      cards: [Object.assign({}, card)]
    },
    {
      id: 2,
      title: 'Blocked',
      cards: [Object.assign({}, card)]
    },
    {
      id: 3,
      title: 'Done',
      cards: [Object.assign({}, card)]
    }
  ],
  show: true,
  sectionTitle: ''
}
