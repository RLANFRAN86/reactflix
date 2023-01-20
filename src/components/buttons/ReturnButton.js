import React from 'react';
import '../../styles/movieByGenrePage.css';
import { Link, useNavigate } from 'react-router-dom';


function ReturnButton() {

    const navigate = useNavigate();


    return (
        <>

            <button className='returnButton' onClick={() => navigate(-1)}>
                <img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" />   Volver
            </button>

        </>
    )
};


export default ReturnButton;