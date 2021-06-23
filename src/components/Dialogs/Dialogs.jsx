import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}


const Dialogs = (props) => {

  let dialogsData = [
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

  let messageData = [
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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
      </div>

      <div className={s.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
      </div>
    </div>
  )
}
export default Dialogs;