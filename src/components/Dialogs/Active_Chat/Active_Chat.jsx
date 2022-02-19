import React from "react";
import css from './Active_Chat.module.css';
import Chat from "./Chat/Chat";

const Active_Chat = (props) => {
    let chat = props.activeChatData.map(el => <Chat id={el.id} message={el.message} />)
    return (
        <div className={css.chat}>
            {chat}
        </div>
    )
}
export default Active_Chat;