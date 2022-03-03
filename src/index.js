import React from 'react';
import './index.css';
import state, {addMessage, addPost, createNewMessageInDialogs, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} createNewMessageInDialogs={createNewMessageInDialogs}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


