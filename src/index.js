import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
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
];

let dialogs = [
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
];

let messages = [
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
];

ReactDOM.render(
  <React.StrictMode>
    <App 
      posts={posts}
      dialogs={dialogs}
      messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
