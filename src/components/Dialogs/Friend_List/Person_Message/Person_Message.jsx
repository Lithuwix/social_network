import React from "react";
import css from './Person_Message.module.css';
import {Link} from "react-router-dom";

const Person_Message = (props) => {
    let path = '/dialogs/' + '' + props.id;
    return (
        <div className={css.person}>
            <Link to={path}>{props.name}</Link>
        </div>
    );
}
export default Person_Message;