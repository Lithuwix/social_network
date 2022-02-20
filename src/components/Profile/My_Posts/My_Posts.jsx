import React from "react";
import Post from "./Post/Post";
import css from "./My_Posts.module.css";

const My_Posts = (props) => {

    let posts = props.posts.map ( el => <Post id={el.id} message={el.message} likesCount={el.likesCount}/>)

    let newPostText = React.createRef(); // ref - по сути метод react, который создает ССЫЛКУ на элемент

    let addPost = () => {
        let text = newPostText.current.value;
        props.addPost(text);
        newPostText.current.value = '';
    };

    return (
        <div className={css.posts}>
            My posts
            <textarea className={css.new_post_text} ref={newPostText}>
            </textarea>
            <button className={css.create_new_post_btn} onClick={ addPost }>
                send
            </button>
            { posts }
        </div>
    );
}

export default My_Posts;