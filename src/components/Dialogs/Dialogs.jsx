import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        <div className={s.dialog}>
          <NavLink to='/dialogs/1' activeClassName={s.active}>Timofey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2' activeClassName={s.active}>Kostya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3' activeClassName={s.active}>Kolyas</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4' activeClassName={s.active}>Dim</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5' activeClassName={s.active}>Dasha</NavLink>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>
          Hello
        </div>
        <div className={s.message}>
          Hello!!!
        </div>
        <div className={s.message}>
          Have a nice day!
        </div>
      </div>
    </div>
  )
}
export default Dialogs;