import './App.css';
import {Routes, Route} from 'react-router-dom'
import CardDesk from "./CardDesk/CardDesk";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import React from "react";

function App() {




    return (

        <div className="App">




            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/:title" element={<CardDesk/>}/>
                <Route path="/payment" element={<CardDesk/>}/>

            </Routes>


                </div>




    )






}

export default App;
