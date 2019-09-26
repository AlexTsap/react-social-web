import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <div className={style.item}>
                <MyPosts myPosts={props.myPosts}/>
            </div>
        </div>
    );
};

export default Profile;
