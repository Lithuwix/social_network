import React from "react";
import css from './Friend_List.module.css';
import Person_Message from "./Person_Message/Person_Message";

const Friend_List = () => {
    return (
        <div className={css.container}>
            <div className={css.dialogs}>Dialogs</div>
            <Person_Message name="Paul" chat_id="1"/>
            <Person_Message name="Doom" chat_id="2"/>
            <Person_Message name="Flake" chat_id="3"/>
            <Person_Message name="Oliver" chat_id="4"/>
            <Person_Message name="Richard" chat_id="5"/>
            <Person_Message name="Till" chat_id="6"/>
        </div>
    )
}

export default Friend_List;