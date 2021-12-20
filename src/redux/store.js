import profileReducer from './profileReducer'
import dialogsReducer from './dialogReducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hi, how are you?',
          likesCount: 22
        },
        {
          id: 2,
          message: 'It\'s my first post',
          likesCount: 34
        }
      ],
      newPostText: 'New post'
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Timofey'
        },
        {
          id: 2,
          name: 'Kostya'
        },
        {
          id: 3,
          name: 'Kolyas'
        },
        {
          id: 4,
          name: 'Dim'
        },
        {
          id: 5,
          name: 'Dasha'
        }
      ],
      messages: [
        {
          id: 1,
          message: 'Hi'
        },
        {
          id: 2,
          message: 'Hello'
        },
        {
          id: 3,
          message: 'Have a nice day!'
        }
      ],
      newTextMessage: ''
    }
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}

export default store;