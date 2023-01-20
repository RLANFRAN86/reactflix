import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Header from '../Header.js';
import '../../styles/MovieDetails.css';
import HeaderWithBtns from '../HeaderWithBtns.js';


function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const urlMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES`;

    useEffect(() => {
        const getMovieDetailsData = async () => {
            const respMovieDetails = await axios.get(urlMovieDetails);
            setMovie(respMovieDetails.data);
        }
        getMovieDetailsData();
    }, [])



    return (
        <div className='background'>
            <HeaderWithBtns />

            <div className='titles'>
                <h1>{movie.title}</h1>
            </div>
            <div className='movie-card'>

                <div className='images' >
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="detailsPoster" />
                </div>

                <div className='detailsContainer'>
                    <h4>Rating</h4>
                    <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
                    <h4>Sinopsis</h4>
                    <div className='divider' />
                    <h5>{movie.overview}</h5>
                    <div className='divider' />
                    <h4>Fecha de Estreno</h4>
                    <div className='divider' />
                    <h5>{movie.release_date}</h5>
                </div>
            </div>
        </div>
    );
};
export default MovieDetails;