import React from "react";
import css from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={css.nav}>
            <div><Link to='/profile' className={css.item}>Profile</Link></div>
            <div><Link to='/dialogs' className={css.item}>Messages</Link></div>
            <div><Link to='/news' className={css.item}>News</Link></div>
            <div><Link to='/music' className={css.item}>Music</Link></div>
            <div className={css.settings}><Link to='/settings' className={css.item}>Settings</Link></div>
        </nav>
    );
}
export default Nav;