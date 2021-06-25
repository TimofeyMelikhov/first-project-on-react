import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  );
};
export default Profile;
