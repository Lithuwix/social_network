import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={css.posts}>
            My posts
            <div className={css._111}>
                your news...
            </div> 
            <div className={css._222}>
                send
            </div>
            <Post message="Hey, Why nobody love me..?"/>
            <Post message="It's my first Post"/>
        </div>
    );
}

export default MyPosts;