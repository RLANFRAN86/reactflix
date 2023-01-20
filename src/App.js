import Home from './components/Pages/Home.js';
import MovieByGenrePage from './components/Pages/MovieByGenrePage.js';
import TopRatedPage from './components/Pages/TopRatedPage.js';
import UpcomingMovies from './components/Pages/UpcomingMovies';
import MovieDetails from './components/Pages/MovieDetails.js';
import NowPlaying from './components/Pages/NowPlaying.js';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:id/:name" element={<MovieByGenrePage />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/topRated" element={<TopRatedPage />} />
        <Route path="/now_playing" element={<NowPlaying />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="*" element={<p>ERROR 404 PAGE NOT FOUND</p>} />
      </Routes>
    </>

  );
}

export default App;