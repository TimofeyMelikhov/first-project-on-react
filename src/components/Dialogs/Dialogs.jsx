import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/state'

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }

  let onMessageChange = () => {
    let textMessage = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(textMessage))
  }

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
        <textarea ref={newMessageElement} 
          value={props.dialogsPage.newTextMessage}
          onChange={onMessageChange}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  )
}
export default Dialogs;