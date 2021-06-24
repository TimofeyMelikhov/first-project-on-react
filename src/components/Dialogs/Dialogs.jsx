import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

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

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs;