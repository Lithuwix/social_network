import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let active_chat_Data = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your It KAMASUTRA?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo yo yo!!!'}
]

let friend_List_Data = [
    {id: 1, name: 'Paul'},
    {id: 2, name: 'Doom'},
    {id: 3, name: 'Flake'},
    {id: 4, name: 'Oliver'},
    {id: 5, name: 'Richard'},
    {id: 6, name: 'Till'}
]

let postsData = [
    {id: 1, message: "Hey, Why nobody love me..?", likesCount: '23'},
    {id: 2, message: "It's my first Post", likesCount: '0'}
]


ReactDOM.render(
  <React.StrictMode>
    <App dataForChat={active_chat_Data} dataForFriendList={friend_List_Data} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
