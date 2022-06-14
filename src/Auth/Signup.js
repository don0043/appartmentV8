import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../store/slices/userslice";
import React from 'react';
import Register from "./Register";

const Signup = () => {
    const dispatch = useDispatch();


    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
            })
            .catch(console.error)
    }


    return (
        <Register
        title="register"
        handleClick={handleRegister}

        />
    );
};

export default Signup;
