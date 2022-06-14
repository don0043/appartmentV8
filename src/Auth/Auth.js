import React, {useState} from 'react';
import './Auth.css';
import Header from "../Header/Header";
import {Link} from "react-router-dom";


const Auth = ({title, handleClick}) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');



    return (
        <div>
            <Header/>
        <div className="auth-content">
            <h2>Auth</h2>
            <div className="forms">
                <div className="form1">
                    <h3>Login</h3> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email"/>
                </div>
                <div className="form2">
                    <h3>Password</h3> <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="enter password"/>
                </div>

                <button onClick={() => handleClick(email, pass)}>
                    {title}
                </button>

            </div>
            <Link to="/register"> If u dont have an account</Link>
        </div>

        </div>
    );
};

export default Auth;
