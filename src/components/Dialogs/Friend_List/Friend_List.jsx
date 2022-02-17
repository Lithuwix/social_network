import React from "react";
import css from './Friend_List.module.css';
import Person_Message from "./Person_Message/Person_Message";

const Friend_List = () => {
    let dialogsData = [
        {id: 1, name: 'Paul'},
        {id: 2, name: 'Doom'},
        {id: 3, name: 'Flake'},
        {id: 4, name: 'Oliver'},
        {id: 5, name: 'Richard'},
        {id: 6, name: 'Till'},

    ]
    return (
        <div className={css.container}>
            <div className={css.dialogs}>Dialogs</div>
            <Person_Message name={dialogsData[0].name} chat_id={dialogsData[0].id}/>
            <Person_Message name={dialogsData[1].name} chat_id={dialogsData[1].id}/>
            <Person_Message name={dialogsData[2].name} chat_id={dialogsData[2].id}/>
            <Person_Message name={dialogsData[3].name} chat_id={dialogsData[3].id}/>
            <Person_Message name={dialogsData[4].name} chat_id={dialogsData[4].id}/>
            <Person_Message name={dialogsData[5].name} chat_id={dialogsData[5].id}/>
        </div>
    )
}

export default Friend_List;