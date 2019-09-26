import React from 'react';
import style from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={style.post}>

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-X6PErE2LpqZ-DGqNPgoMnZqvtlF0wuA7scNhnx7LjVKILar3YQ"
                alt=""/>
            <span>{props.name}, {props.age}</span>
            <div>
                <span>{props.message}</span>
            </div>
            <div>
                <span>likes {props.likes}</span>
            </div>
        </div>
    )
};

export default MyPost;
