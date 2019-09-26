import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myPosts = [
    {id: '1', likes: '32', name: 'Anton', age: '33', message: 'I feel free!!!'},
    {id: '2', likes: '12', name: 'Alex', age: '39', message: 'How are you?'},
    {id: '3', likes: '34', name: 'Slava', age: '42', message: 'It\'s my post'},
    {id: '4', likes: '53', name: 'Sasha', age: '33', message: ''},
    {id: '5', likes: '76', name: 'Yura', age: '34', message: ''}
];

const dialogsData = [
    {name: "Sasha", id: "1"},
    {name: "Sergei", id: "2"},
    {name: "Vova", id: "3"},
    {name: "Yulia", id: "4"},
    {name: "Denis", id: "5"}
];

const messagesData = [
    {likes: 1, message: "Hi!", id: "1"},
    {likes: 12, message: "Chao!", id: "2"},
    {likes: 13, message: "Bongorno!", id: "3"},
    {likes: 14, message: "Privet!", id: "4"},
    {likes: 15, message: "Aloha!", id: "5"}
];

const allMessagesData = {dialogsData, messagesData};

ReactDOM.render(<App myPosts={myPosts} allData={allMessagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
