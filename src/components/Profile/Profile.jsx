import React from "react";
import My_Posts from "./My_Posts/My_Posts";
import css from './Profile.module.css';
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (props) => {
    return (
        <div>
              <Profile_Info />
              <My_Posts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;