import s from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
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
      <MyPosts />
    </div>
  );
};
export default Profile;
