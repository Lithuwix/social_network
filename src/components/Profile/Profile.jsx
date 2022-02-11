import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import css from './Profile.module.css';
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = () => {
    return (
        <div>
              <Profile_Info />
              <MyPosts />
        </div>
    );
}

export default Profile;