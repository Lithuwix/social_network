import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}