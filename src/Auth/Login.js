import React, {useState} from 'react';
import Auth from "./Auth";
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userslice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from 'react-router-dom';
import {useAuth} from "../hooks/use-auth";
import Header from "../Header/Header";
import './Auth.css'



const Login = () => {

    const [price, setPrice] = useState(' ')
    const [address, setAddress] = useState(' ')
    const [number, setNumber] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [city, setCity] = useState(' ')
    const [desk, setDesk] = useState(' ')
    const [img, setImg] = useState(' ')


    const PriceInp = React.createRef()
    const AddrInp = React.createRef()
    const NumberInp = React.createRef()
    const EmailInp = React.createRef()
    const CityInp = React.createRef()
    const DeskInp = React.createRef()
    const ImgInp = React.createRef()



    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState(false);


    const handleChange = () => {
        setPrice(PriceInp.current.value)
        setAddress(AddrInp.current.value)
        setNumber(NumberInp.current.value)
        setEmail(EmailInp.current.value)
        setCity(CityInp.current.value)
        setDesk(DeskInp.current.value)
        setImg(ImgInp.current.value)


    }



    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
        if (auth){
            setIsAuth(true)
        }
    }



    const Contacting = () => {
        fetch('https://app-artment.herokuapp.com/api/mailer', {
            method: 'post',
            body: JSON.stringify(
                {email:  email,
                    phone: number,
                    price: price,
                    address: address,
                    city: city,
                    description: desk}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })

            .then(response => console.log(response))
    }

    return isAuth ? (
        <div>
            <Header/>
            <div className="auth-big-content">
            <div className="form-div"><h2>Ваша цена</h2> <input type="text" ref={PriceInp} onChange={handleChange}/></div>
                <div className="form-div"><h2>Ваша номер телефона</h2> <input type="text"  ref={NumberInp} onChange={handleChange}/></div>
                <div className="form-div"> <h2>Этот адрес почта</h2> <input type="text"  ref={AddrInp} onChange={handleChange}/></div>
                <div className="form-div"><h2>Ваша электронная почта</h2> <input type="text"  ref={EmailInp} onChange={handleChange}/></div>
                <div className="form-div"><h2>City</h2> <input type="text"  ref={CityInp} onChange={handleChange}/></div>
                <div className="form-div"><h2>Desk</h2> <input type="text"  ref={DeskInp} onChange={handleChange}/></div>
                <div className="form-div"><h2>Image</h2> <input type="text"  ref={ImgInp} onChange={handleChange}/></div>
            <button className="adding-btn" onClick={Contacting}>отправить обьявление на расмотрение</button>
            </div>
        </div>

        ): (
        <Auth
        title="sign-in"
        handleClick={handleLogin}
        />
    )
}

export default Login;
