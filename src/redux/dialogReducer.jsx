const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newTextMessage
      };
      state.messages.push(newMessage);
      state.newTextMessage = ''
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newTextMessage = action.newTextMessage
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator = (newTextMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMessage: newTextMessage
})

export default dialogsReducer;