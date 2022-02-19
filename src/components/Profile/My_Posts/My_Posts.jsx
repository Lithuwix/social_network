import React from "react";
import Post from "./Post/Post";
import css from "./My_Posts.module.css";

const My_Posts = (props) => {

    let posts = props.postsData.map ( el => <Post id={el.id} message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={css.posts}>
            My posts
            <div className={css._111}>
                your news...
            </div> 
            <div className={css._222}>
                send
            </div>
            { posts }
        </div>
    );
}

export default My_Posts;