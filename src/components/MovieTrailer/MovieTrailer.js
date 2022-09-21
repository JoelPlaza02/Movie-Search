import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import MovieTrailerNavbar from '../MovieTrailerNavbar/MovieTrailerNavbar';
import SearchIcon from '@mui/icons-material/Search';
import './MovieTrailer.css';

const MovieTrailer = () => {
  const [video, setVideo] = useState("inception"); 
  const [videoURL, setVideoURL] = useState("https://youtube/sa91-dTv9GK");

  const handleTrailerSearch = () => {
      movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }


  return (
    <>
    <MovieTrailerNavbar />
    <section className="movieTrailer">
      <div className="movieTrailer__search-box">
          <header className='movieTrailer__header'>
              <h4>Search Movie or Tv Show Trailers🎬</h4>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <input 
              type="text" 
              onChange={(e) => { setVideo(e.target.value) }} 
              className='movieTrailer__input'
          />
          <SearchIcon
              onClick={()=>{handleTrailerSearch()}} 
              className='movieTrailer__button'
          />
          </div>
          </header>
      </div>
      <div className='movieTrailer__playerWrapper'>
      <ReactPlayer 
          url={videoURL} 
          controls={true}
      />
      </div>
    </section>
    </>
  );
}

export default MovieTrailer;