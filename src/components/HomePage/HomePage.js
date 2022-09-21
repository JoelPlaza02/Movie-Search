import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MoviePopularSection from '../MoviePopularSection/MoviePopularSection';
import './HomePage.css';
import Sidebar from '../Sidebar/Sidebar';
import ClipLoader from 'react-spinners/ClipLoader';

const API_URL='https://api.themoviedb.org/3/movie/popular?api_key=dfec6e32b7f45c769731b600bb836c4d&language=en-US';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
        setLoading(false);
    })
  }, [])


  return (
    <>
    {
        loading ?
        
        <ClipLoader
          color="#36d7b7"
          size={30}
          loading={loading}
        />

    : 

     <section className='sidebarsection'>
      <Sidebar />
      <section className='homePage'>
        <SearchBar 
            setMovies={setMovies} 
            setSearchResults={setSearchResults} 
            searchResults={searchResults} 
        />
        <div className='movieSection'>
            <MoviePopularSection movies={movies} />
        </div>
      </section>
    </section>
        }
    </>
  );
};

export default HomePage;
