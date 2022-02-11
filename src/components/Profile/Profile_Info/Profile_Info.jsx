import React from "react";
import css from './Profile_Info.module.css';

const Profile_Info = () => {
    return (
        <div>
            <div className={css.fon}>
            </div>
            <div className={css.info}>
                <div className={css.img}>

                </div>
                <div className="profile_description">
                    <div className={css.user_name}>Marye N.</div>
                    <div className={css.user_info}>Age: 25<br/>City: Minsk<br/>Education: BSU'18</div>
                </div>
            </div>
        </div>
    );
}

export default Profile_Info;