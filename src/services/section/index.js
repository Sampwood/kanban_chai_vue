import getIndexedDB from '../indexedDB'

export default {
  // 获取sections
  apiGetSections: () => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        resolve([{
          key: '0',
          title: 'To Do',
          cards: [{
            key: '00',
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
            isDone: false,
            checklist: [],
            tags: [],
            attachments: [{
              id: 0,
              name: 'avatar.jpg',
              isPin: true,
              path: '../../assets/img/zoro.jpg',
              uploadDate: new Date(),
            }],
            comments: [{
              id: 0,
              message: 'hello',
              createDate: new Date(),
            }],
            activity: [{
              type: 'created new card',
              time: new Date(),
              content: null,
            }],
          }],
        }, {
          key: '1',
          title: 'Ongoing',
          cards: [{
            key: '10',
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
            isDone: false,
            checklist: [],
            tags: [],
            attachments: [{
              id: 0,
              name: 'avatar.jpg',
              isPin: true,
              path: '../../assets/img/zoro.jpg',
              uploadDate: new Date(),
            }],
            comments: [{
              id: 0,
              message: 'hello',
              createDate: new Date(),
            }],
            activity: [{
              type: 'created new card',
              time: new Date(),
              content: null,
            }],
          }],
        }, {
          key: '2',
          title: 'Blocked',
          cards: [{
            key: '20',
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
            isDone: false,
            checklist: [],
            tags: [],
            attachments: [{
              id: 0,
              name: 'avatar.jpg',
              isPin: true,
              path: '../../assets/img/zoro.jpg',
              uploadDate: new Date(),
            }],
            comments: [{
              id: 0,
              message: 'hello',
              createDate: new Date(),
            }],
            activity: [{
              type: 'created new card',
              time: new Date(),
              content: null,
            }],
          }],
        }, {
          key: '3',
          title: 'Done',
          cards: [{
            key: '30',
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
            isDone: false,
            checklist: [],
            tags: [],
            attachments: [{
              id: 0,
              name: 'avatar.jpg',
              isPin: true,
              path: '../../assets/img/zoro.jpg',
              uploadDate: new Date(),
            }],
            comments: [{
              id: 0,
              message: 'hello',
              createDate: new Date(),
            }],
            activity: [{
              type: 'created new card',
              time: new Date(),
              content: null,
            }],
          }],
        }])
      }, reject)
    })
  },
  // 新建section
  apiCreateSection: params => {
    return new Promise((resolve, reject) => {
      getIndexedDB(db => {
        resolve({
          section: {
            key: Date.now(),
            title: 'new section',
            cards: [],
          },
        })
      }, reject)
    })
  },
}
