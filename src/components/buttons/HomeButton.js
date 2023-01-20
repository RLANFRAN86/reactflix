import React from 'react';
import '../../styles/movieByGenrePage.css';
import { Link, useNavigate } from 'react-router-dom';


function HomeButton() {

    const navigate = useNavigate();


    return (
        <>

            <button className='returnButton' onClick={() => navigate('/')}>
                <img className='homeButton' src='https://cdn-icons-png.flaticon.com/512/8892/8892996.png' width="16px" />   Home
            </button>

        </>
    )
};


export default HomeButton;