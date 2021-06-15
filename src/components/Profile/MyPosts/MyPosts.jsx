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
          <Post  message ='Hi, how are you?' counts='22'/>
          <Post  message ="It's my first post" counts='34'/>
        </div>
      </div>
  );
};
export default MyPosts;
