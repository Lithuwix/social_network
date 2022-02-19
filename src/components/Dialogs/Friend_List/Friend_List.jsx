import React from "react";
import css from './Friend_List.module.css';
import Person_Message from "./Person_Message/Person_Message";

const Friend_List = (props) => {
    let list = props.friendListData.map (el => <Person_Message id={el.id} name={el.name}/>)

    return (
        <div className={css.container}>
            <div className={css.dialogs}>Dialogs</div>
            { list }
        </div>
    )
}

export default Friend_List;