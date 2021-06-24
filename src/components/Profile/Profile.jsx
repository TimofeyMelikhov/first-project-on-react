import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {

  let posts = [
    {
      id: 1,
      message: 'Hi, how are you?',
      likesCount: 22
    },
    {
      id: 2,
      message: 'It\'s my first post',
      likesCount: 34
    }
  ]

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
};
export default Profile;
