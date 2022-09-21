import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SearchBarTv from '../SearchBarTv/SearchBarTv';
import TvShowSection from '../TvShowSection/TvShowSection';
import ClipLoader from 'react-spinners/ClipLoader';
import './TvShowPage.css';

const TvSHOW_URL='https://api.themoviedb.org/3/tv/on_the_air?api_key=dfec6e32b7f45c769731b600bb836c4d&language=en-US&page=1';

const TvShowPage = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loadingTv, setLoadingTv] = useState(false);
  const [tvSearchResults, setTvSearchResults] = useState("");

  useEffect(() => {
    setLoadingTv(true);
    fetch(TvSHOW_URL)
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        setTvShows(data.results)
        setLoadingTv(false);
    })
}, [])

  return (
    <>
        {loadingTv ?

        <ClipLoader
        css
        color="#36d7b7"
        size={30}
        loadingTv={loadingTv}
        />

        :


        <section className='sidebarsection'>
            <Sidebar />
            <section className='tvShowPage'>
                <SearchBarTv 
                    setTvShows={setTvShows} 
                    setTvSearchResults={setTvSearchResults} 
                    tvSearchResults={tvSearchResults}
                />
                <div className='tvShowSection'>
                    <TvShowSection tvShows={tvShows} />
                </div>
            </section>
    </section>
        }
    </>
 );
};

export default TvShowPage;