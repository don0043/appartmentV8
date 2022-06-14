import './App.css';
import {Routes, Route} from 'react-router-dom'
import CardDesk from "./CardDesk/CardDesk";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import React from "react";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {




    return (

        <div className="App">




            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Signup/>}/>
                <Route path="/:title" element={<CardDesk/>}/>
                <Route path="/payment" element={<CardDesk/>}/>

            </Routes>


                </div>




    )






}

export default App;
