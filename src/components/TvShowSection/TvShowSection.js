import React from 'react'
import TvShowCard from '../TvShowCard/TvShowCard';
import './TvShowSection.css';


const TvShowSection = ({ tvShows }) => {

  return (
    <>
      <header className='tvShowSection__header'>
          <h2>Streaming On TV</h2>
      </header>
      {tvShows.length > 0 ? (
      <div className='tvShowSection'>
          {tvShows.map((tvShow) => {
              return (
                  <TvShowCard
                      key={tvShow.id}
                      poster_path={tvShow.poster_path}
                      vote_average={tvShow.vote_average}
                      name={tvShow.name}
                      first_air_date={tvShow.first_air_date}
                      overview={tvShow.overview}
                  />
              );
          })}
      </div>
      ):(
        <div className='tvShowSection__notFound'>
          <h2>Not Found...</h2>
        </div>
      )}
    </>
  );
};

export default TvShowSection;