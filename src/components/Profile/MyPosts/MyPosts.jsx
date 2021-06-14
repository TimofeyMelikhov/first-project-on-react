import s from './MyPosts.module.scss'
import Post from './Post/Post'
const MyPosts = () => {
  return (
      <div>
        My post
        <div>
          New Posts
        </div>
        <div className={s.posts}>
          <Post  message ='Hi, how are you?'/>
          <Post  message ="It's my first post"/>
        </div>
      </div>
  );
};
export default MyPosts;
