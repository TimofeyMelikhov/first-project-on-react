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

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('state changed');
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state);
  },

  sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newTextMessage
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newTextMessage = ''
    this._callSubscriber(this._state)
  },

  updateNewMessageText(textMessage) {
    this._state.dialogsPage.newTextMessage = textMessage
    this._callSubscriber(this._state)
  },
  
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store;
window.store = store;