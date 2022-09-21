import React from 'react';
import MoviePopularCard from '../MoviePopularCard/MoviePopularCard';
import './MoviePopularSection.css';

const MoviePopularSection = ({ movies }) => {

  return (

    <>
    <header className='moviePopularSection__header'>
        <h2>Movies</h2>
    </header>
    {movies.length > 0 ? (
    <section className='moviePopularSection'>
       {movies.map((movie) => {
            return (
               <MoviePopularCard
                    key={movie.id}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    title={movie.title}
                    release_date={movie.release_date}
                    overview={movie.overview}
                />
            );
        })}
    </section>
    ):(
      <div className='moviePopularSection__notFound'>
          <h2>Movie Not Found...</h2>
      </div>
    )}
    </>
  );
};

export default MoviePopularSection;