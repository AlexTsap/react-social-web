import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.image}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kzJ0rydH34OAftFVHOlKNkEywRfLw3qWgb_xRBk3GkDxq4CU"
                    alt=""/>
            </div>
            <div className={style.item}>
                ava + description
            </div>
            <div className={style.item}>
                <h2>
                    my posts
                </h2>
            </div>
        </div>
    );
};

export default ProfileInfo;
