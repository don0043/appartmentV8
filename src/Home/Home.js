import '../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import {Link, Route, Routes} from "react-router-dom";
import Adv from "../Adv/Adv";


function Home() {

    const [photos, setPhotos] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [modalActive, setModalActive] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const photos2 = [];


    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            axios.get(`https://app-artment.herokuapp.com/api/advertising?_limit=10&_page=${currentPage}`)
                .then(response => {
                    setPhotos([...photos, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalCount(response.headers['x-total-count'])
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }


    }

    const filteredCards = photos.filter(photo => {
        return photo.title.includes(searchValue)
    })


    return (

        <div>


            <Header/>
            <div className="sidebar">

                <div className="searchInput">

                    <h3>Поиск</h3>
                    <input type="text" className="searchInp" onChange={(event) => {
                        setSearchValue(event.target.value)
                    }}/>


                </div>

            </div>


            {filteredCards.map(photo =>
                <div className="photo" key={photo.id} onClick={() => setModalActive(true)}>

                    <div className="carousel">
                        <img src={photo.img} className="photoImg" alt="photo"/>
                    </div>
                    <h2 className="title photoId">{photo.id}{photo.title}</h2>
                    <p>Описание: {photo.description}</p>
                    <p>Адрес: {photo.address}</p>
                    <p>Цена: {photo.price}$</p>
                    <p>Phone number:{photo.phone}</p>
                    <Link to={'/' + photo.title} className="deskButton">Podrobnee</Link>

                </div>)}


        </div>
    );
}

export default Home;
