import s from './MyPosts.module.scss'
import Post from './Post/Post'
const MyPosts = () => {

  let postsData = [
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
      <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message ={postsData[0].message} counts={postsData[0].likesCount}/>
          <Post message ={postsData[1].message} counts={postsData[1].likesCount}/>
        </div>
      </div>
  );
};
export default MyPosts;