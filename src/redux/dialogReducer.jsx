const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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