import React from 'react';
import './DisplayCards.css'
import Card from "../Card/Card";




const DisplayCards = () => {
    return (
        <div className="displayCards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default DisplayCards;
