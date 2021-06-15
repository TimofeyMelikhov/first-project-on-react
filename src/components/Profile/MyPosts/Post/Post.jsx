import s from "./Post.module.scss";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WoYcMraOIGW1042Tbmq7Otvwc7To_rRJGINGXDWBqUN-FyrUfDZrWZfIAX2o23yXlaxTfAJhAGv8Ow&usqp=CAU"
        alt=""
      />
      { props.message }
      <div>Like {props.counts}</div>
    </div>
  );
};
export default Post;
