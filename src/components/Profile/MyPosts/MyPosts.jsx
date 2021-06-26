import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post'
const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message ={p.message} counts={p.likesCount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let newPost = newPostElement.current.value;
    props.addPost(newPost)
    newPostElement.current.value = '';
  }

  return (
      <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {postsElement}
        </div>
      </div>
  );
};
export default MyPosts;