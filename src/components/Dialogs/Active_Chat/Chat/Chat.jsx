import React from "react";
import css from './Chat.module.css';

const Chat = (props) => {

    return (
        <div>{props.message}</div>
    )
}

export default Chat;