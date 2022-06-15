import React, {useEffect, useRef, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './CardDesk.css';
import Header from "../Header/Header";



const CardDesk = (props) => {




    const slider = useRef(null)
    const [post, setPost] = useState({});
    const {title} = useParams();
    const [price, setPrice] = useState(' ')
    const [address, setAddress] = useState(' ')
    const [number, setNumber] = useState(' ')
    const [email, setEmail] = useState(' ')

    let position = 0

    const PriceInp = React.createRef()
    const AddrInp = React.createRef()
    const NumberInp = React.createRef()
    const EmailInp = React.createRef()







    const handleChange = () => {
        setPrice(PriceInp.current.value)
        setAddress(AddrInp.current.value)
        setNumber(NumberInp.current.value)
        setEmail(EmailInp.current.value)


    }

    const prevHandler = () => {
        console.log(slider.childNodes)
        position += 650
        slider.current.childNodes.forEach((e) => {
            e.style = `transform: translateX(${position}px)`
        })
        }

    const nextHandler = () => {
        console.log('next')
        position -= 650
        slider.current.childNodes.forEach((e) => {
            e.style = `transform: translateX(${position}px)`
        })
    }


    useEffect(() => {
        fetch(`https://app-artment.herokuapp.com/api/advertising/${title}`)
                .then(res => res.json())
            .then(data => setPost(data))
    }, [title]


    )

    const images = [post.img, post.img2, post.img3, post.img4]


const fbody = {
    price: price,
    address: address,
    number: number
}



const Contacting = () => {
    fetch('https://app-artment.herokuapp.com/api/mailer', {
        method: 'post',
        body: JSON.stringify(
            {email:  email,
                    phone: number,
                    price: price,
                    address: address}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    })

        .then(response => console.log(response))
    console.log(fbody)
}



    return (
        <div className="card-box">
            <Header/>
        <div className="card-desk">

        <div className="card-body">

            <div className="slider">

                        <div className="Slider">

                            <div className="Slider__track" ref={slider}>

                                {images.map((e) => {
                                    return(
                                        <img src={e} className="Slider_item">

                                        </img>
                                        )

                                })}

                            </div>
                            <button className="Slider__button_prev" onClick={prevHandler}>{`<`}</button>
                            <button className="Slider__button_next" onClick={nextHandler}>{`>`}</button>
                        </div>


            </div>
            <h1>{post.title}</h1>
            <p>цена : {post.price}$</p>
            <p>город : {post.city}</p>
            <p>{post.paragraph}</p>
            <p>телефон : {post.phone}</p>
            <p>почта хозяина: {post.email}</p>

            <div className="host-input">
            <h2>Связаться с хозяином</h2>

            <p>Ваша цена</p> <input type="text" ref={PriceInp} onChange={handleChange}/>
            <p>Ваша номер телефона</p> <input type="text"  ref={NumberInp} onChange={handleChange}/>
            <p>Этот адрес почта</p> <input type="text"  ref={AddrInp} onChange={handleChange}/>
            <p>Ваша электронная почта</p> <input type="text"  ref={EmailInp} onChange={handleChange}/>
                <button className="buto" onClick={Contacting}>отправить письмо хозяину</button>
            </div>
        </div>




        </div>
        </div>
    );
};

export default CardDesk;
