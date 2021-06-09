import s from './Profile.module.scss'
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg"
          alt=""
        />
      </div>
      <div>ava + descr</div>
      <div>
        my post
        <div>new post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
