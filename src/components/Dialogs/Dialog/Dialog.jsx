import React from 'react';
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = `/dialogs/${props.id}`;

    return (
        <div className={style.item}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};

export default Dialog;
