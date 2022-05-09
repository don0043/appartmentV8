import React from 'react';
import './Auth.css';
import Header from "../Header/Header";
import Home from "../Home/Home";

const Auth = () => {
    return (
        <div>
            <Header/>
        <div className="auth-content">
            <h2>Auth</h2>
            <div className="forms">
                <div className="form1">
                    <h3>Login</h3> <input type="text"/>
                </div>
                <div className="form2">
                    <h3>Password</h3> <input type="text"/>
                </div>

                <button>Auth</button>

            </div>
        </div>
        </div>
    );
};

export default Auth;
