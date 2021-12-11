import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = () => {
    let textMessage = newMessageElement.current.value;
    props.updateNewMessageText(textMessage)
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
          value={props.newTextMessage}
          onChange={onMessageChange}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  )
}
export default Dialogs;