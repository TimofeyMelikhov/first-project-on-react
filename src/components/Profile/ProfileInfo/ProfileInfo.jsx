import s from './ProfileInfo.module.scss';
const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>
        ava + descr
      </div>
    </div>
  );
};
export default ProfileInfo;
