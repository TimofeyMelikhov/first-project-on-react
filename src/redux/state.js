import {rerenderEntireTree} from '../render'

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
    ]
  }
};


export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state);
}

export default state;