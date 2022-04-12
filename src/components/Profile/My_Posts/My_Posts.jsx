import React from "react";
import Post from "./Post/Post";
import css from "./My_Posts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const My_Posts = (props) => {

    let posts = props.posts.map ( el => <Post id={el.id} message={el.message} likesCount={el.likesCount}/>)

    let newPostText = React.createRef(); // ref - по сути метод react, который создает ССЫЛКУ на элемент

    //function from STORE in props
    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    };

    //function from STORE in props
    let onPostChange = () => {
        let text = newPostText.current.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
    };

    return (
        <div className={css.posts}>
            My posts
            <textarea className={css.new_post_text}  onChange={ onPostChange } ref={newPostText} value={props.newPostText} />
            <button className={css.create_new_post_btn} onClick={ addPost }>
                send
            </button>
            { posts }
        </div>
    );
}

export default My_Posts;