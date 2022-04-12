import React from "react";
import css from './Active_Chat.module.css';
import Chat from "./Chat/Chat";
import {addMessageActionCreator, createNewMessageInDialogsActionCreator} from "../../../redux/dialogs-reducer";


const Active_Chat = (props) => {

    let chat = props.messages.map(el => <Chat id={el.id} message={el.message}/>)
    let newMessageText = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    //    function from store
    }

    let onMessageChange = () => {
        let text = newMessageText.current.value;
        props.dispatch(createNewMessageInDialogsActionCreator(text));
        //    function from store
    }

    return (
        <div className={css.chat}>
            <div className={css.message_items}>
                { chat }
            </div>
            <textarea className={css.message_area} ref={newMessageText} onChange={ onMessageChange } value={props.newMessageText}/>
            <button className={css.send} onClick={ sendMessage }>send message</button>
        </div>
    )
}
export default Active_Chat;