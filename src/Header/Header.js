import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import immg from '../img/main.gif';



const Header = () => {
    return (
            <header>
                <Link to="/"><img src={immg} alt="logo" className="logo"/></Link>
                <Link to="/auth" className="authBtn">войти</Link>
            </header>
    );
};

export default Header;
