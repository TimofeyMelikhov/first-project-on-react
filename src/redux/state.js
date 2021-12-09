let rerenderEntireTree = () => {
  console.log('state changed');
}
let state = {
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
};


export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state);
}

export const sendMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newTextMessage
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newTextMessage = ''
  rerenderEntireTree(state)
}

export const updateNewMessageText = (textMessage) => {
  state.dialogsPage.newTextMessage = textMessage
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;