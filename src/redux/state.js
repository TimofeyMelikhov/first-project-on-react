const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    switch(action.type) {
      case ADD_POST: 
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let newMessage = {
          id: 4,
          message: this._state.dialogsPage.newTextMessage
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newTextMessage = ''
        this._callSubscriber(this._state)
        break;
      case UPDATE_NEW_MESSAGE_TEXT: 
        this._state.dialogsPage.newTextMessage = action.newTextMessage
        this._callSubscriber(this._state)
        break;
      default:
        console.log('Что то пошло не так');
    }
    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = ''
    //   this._callSubscriber(this._state);
    // } else if(action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText
    //   this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let newMessage = {
    //     id: 4,
    //     message: this._state.dialogsPage.newTextMessage
    //   };
    //   this._state.dialogsPage.messages.push(newMessage);
    //   this._state.dialogsPage.newTextMessage = ''
    //   this._callSubscriber(this._state)
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this._state.dialogsPage.newTextMessage = action.newTextMessage
    //   this._callSubscriber(this._state)
    // }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newPostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newPostText
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (newTextMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMessage: newTextMessage
})

export default store;
window.store = store