import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/ImageCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

function CarouselImagenes(movie) {

  const navigate = useNavigate();
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const respMovies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fb1999e69926d1387eb44c3abee6e7c5&language=es-ES&primary_release_year=2022` + movie.poster_path);
      setMoviesData(respMovies.data.results);
    }
    getMoviesData();
  }, []);

  const settingsMovie = {
    speed: 300,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='carousel_container'>
      <Slider {...settingsMovie}>
        {moviesData.map((movie) =>
          <div className='moviesImagesDiv'>
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path} className="imgCarousel" width="300px" onClick={() => navigate(`/${movie.id}`)} />
          </div>
        )}
      </Slider>
    </div>
  );
}

export default CarouselImagenes