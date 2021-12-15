import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/state'

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message ={p.message} counts={p.likesCount}/>)

  let addPost = () => {
    props.dispatch(addPostCreator());
  }

  let onPostChange = (event) => {
    let newPostText = event.target.value;
    props.dispatch(updateNewPostTextCreator(newPostText));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onPostChange} 
          />
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