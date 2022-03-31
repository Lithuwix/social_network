import React from "react";
import css from './Active_Chat.module.css';
import Chat from "./Chat/Chat";

const Active_Chat = (props) => {

    let chat = props.messages.map(el => <Chat id={el.id} message={el.message}/>)
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch( {type: 'ADD-MESSAGE'} );
    //    function from store
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch( {type: 'CREATE-NEW-MESSAGE-IN-DIALOGS', newMessage: text} );
        //    function from store
    }

    return (
        <div className={css.chat}>
            <div className={css.message_items}>
                { chat }
            </div>
            <textarea className={css.message_area} ref={newMessage} onChange={ onMessageChange } value={props.newMessage}/>
            <button className={css.send} onClick={ sendMessage }>send message</button>
        </div>
    )
}
export default Active_Chat;