import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/state'

const Dialogs = (props) => {

  let newMessageValue = props.dialogsPage.newTextMessage;

  let sendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  let onMessageChange = (event) => {
    let textMessage = event.target.value;
    props.dispatch(updateNewMessageTextCreator(textMessage))
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
        <textarea 
          value={newMessageValue}
          onChange={onMessageChange}
        />
        <button onClick={sendMessageClick}>Отправить</button>
      </div>
    </div>
  )
}
export default Dialogs;