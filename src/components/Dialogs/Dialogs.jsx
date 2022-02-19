import React from "react";
import css from './Dialogs.module.css';
import Friend_List from "./Friend_List/Friend_List";
import Active_Chat from "./Active_Chat/Active_Chat";

const Dialogs = (props) => {
    return (
        <div className={css.main}>
            <div className={css.content}>
                <Friend_List friendListData={props.friendListData}/>
                <Active_Chat activeChatData={props.chatData}/>
            </div>
        </div>
    );
}

export default Dialogs;