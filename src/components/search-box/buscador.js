import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieDetails from '../Pages/MovieDetails.js'
import { useNavigate } from "react-router-dom";

function Buscador() {

  const [films, setFilms] = useState([])
  const [movie, setMovie] = useState()
  const navigate = useNavigate() 


  const onSearchHandler = (movieTitle) => {
    let filtrando = films.find((element) => element.title === movieTitle)
    setMovie(filtrando)

  }

  const onChangeHandler = async (text) => {
    if (text && text.length > 2) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&page=1&include_adult=false&query=${text}`)
      setFilms(response.data.results);
    }

  }
  useEffect(() => {
    onChangeHandler()
  }, [films])

  return (
    <>
      <div id="search">
        <input type="text" className='col-md-12' placeholder='Search Movie...'
          onChange={e => onChangeHandler(e.target.value)}
          onBlur={() => {
            setTimeout(() => {
              setFilms([])
            }, 200);
          }} />
        {films.map((search, i) => {
          console.log(1)

          return <div key={i} className="search col-md-12 justify-content-md-center"
            onClick={() => {
              onSearchHandler(search.title)
              return (navigate(`/ ${search.id}`))
            }}>{search.title}

            

            <h4 className='text center'>{films.title}</h4>
          </div>
        })}
      </div>
      <div>
        {movie && (<MovieDetails movieObject={movie} />)}
      </div>
    </>
  );
}
export default Buscador