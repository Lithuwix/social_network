import React from "react";
import My_Posts from "./My_Posts/My_Posts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (props) => {
    return (
        <div>
              <Profile_Info />
              <My_Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;