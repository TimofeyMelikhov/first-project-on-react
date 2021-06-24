import s from './MyPosts.module.scss'
import Post from './Post/Post'
const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message ={p.message} counts={p.likesCount}/>)

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
          {postsElement}
        </div>
      </div>
  );
};
export default MyPosts;