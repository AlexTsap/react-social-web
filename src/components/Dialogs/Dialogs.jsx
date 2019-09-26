import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    const dialogsParticipants = props.allData.dialogsData.map((participant) => <Dialog name={participant.name} id={participant.id}/>);
    const messages = props.allData.messagesData.map((item) => <Message message={item.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsParticipants}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs;
