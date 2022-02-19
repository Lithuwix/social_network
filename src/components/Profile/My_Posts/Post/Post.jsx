import React from "react";
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.post}>
            {props.message}
            <div className={css.likes}>likes {props.likesCount}</div>
        </div>

    );
}

export default Post;