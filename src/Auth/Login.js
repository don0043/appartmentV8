import React from 'react';
import Auth from "./Auth";
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userslice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const dispatch = useDispatch();


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }

    return (
        <Auth
        title="sign-in"
        handleClick={handleLogin}
        />
    );
};

export default Login;
