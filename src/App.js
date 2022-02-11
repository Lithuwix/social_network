import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Nav/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile/>}/>
                        <Route path='/dialogs/*' element={<Dialogs/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;






