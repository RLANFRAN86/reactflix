import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReturnButton from '../buttons/ReturnButton';
import Buscador from '../search-box/buscador';
import Rating from '@mui/material/Rating';
import '../../styles/topRated.css';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../buttons/HomeButton';
import HeaderWithBtns from '../HeaderWithBtns';




function TopRatedPage() {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);

    const urlTopMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&region=ES&page=${pages}`;
    const urlImg = `https://image.tmdb.org/t/p/original`;


    useEffect(() => {
        const getMoviesData = async () => {
            const respMovies = await axios.get(urlTopMovies);
            setMovies(respMovies.data.results);
        }
        getMoviesData();
    }, [pages])


    return (
        <>
            <div className='headerBtns '>
                <HeaderWithBtns />
            </div>
            <div className='search-box'>
                <Buscador />
            </div>
            <div className='topRatedHeader'>
                <h1 className='topRated'>|Mejor Valoradas <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="19px" /></h1>
            </div>



            <div className='container'>

                {movies.map((movie) =>
                    <div className='movies'>
                        <div onClick={() => navigate(`/${movie.id}`)}>
                            <img className="poster" src={urlImg + movie.poster_path} alt="SIN IMAGEN DISPONIBLE" width="220px" />
                            <p className='title'>{movie.title}</p>
                            <p className='rating'>{movie.vote_average / 2} / 5</p>
                            <Rating className="ratingComp" name="half-rating-read" value={movie.vote_average / 2} precision={0.1} max={5} readOnly />
                            <div key={movie.id} />
                        </div>
                    </div>
                )}

            </div>
            <div id='btns'>
                <button id="prev" onClick={() => {
                    if (pages > 0) {
                        setPages(pages - 1)
                    }

                }}
                    disabled={pages <= 1 ? true : false}>
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893000.png' width="16px" />
                </button>

                <p id='page' >
                    {pages} de 20
                </p>

                <button id='next' onClick={() => {
                    setPages(pages + 1)
                }}
                    disabled={pages === 20 ? true : false} >
                    <img src='https://cdn-icons-png.flaticon.com/512/8893/8893034.png' width="16px" />
                </button>
            </div >
        </>
    )
}


export default TopRatedPage;