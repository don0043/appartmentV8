import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import immg from '../img/main.gif';



const Header = () => {
    return (
            <header>
                <Link to="/"><img src={immg} alt="logo" className="logo"/></Link>
                <Link to="/login" className="authBtn">добавить свое объявление</Link>
            </header>
    );
};

export default Header;
