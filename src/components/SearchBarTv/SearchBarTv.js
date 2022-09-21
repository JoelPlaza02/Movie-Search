import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBarTv.css';

const SearchBarTv = ({ setTvShows, setTvSearchResults, tvSearchResults }) => {
  const navigate = useNavigate();
  
  const handleSearchTvSubmit = async (e) => {
      e.preventDefault();
      console.log("Searching for TV Shows...")
      try {
        const Tv_url = `https://api.themoviedb.org/3/search/tv?api_key=dfec6e32b7f45c769731b600bb836c4d&query=${tvSearchResults}`;
        const response = await fetch(Tv_url);
        const data = await response.json();
        console.log(data);
        setTvShows(data.results);
      } catch (error) {
        console.log(error);
      }
  }

  const handleSearchTvChange = (e) => {
      setTvSearchResults(e.target.value);
  }

  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Your are logged out");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <header className='searchBarTv'>
        <form onSubmit={handleSearchTvSubmit} className='SearchBarTv__form'>
          <SearchIcon className='searchBar__searchIcon' />
            <input
                type='search'
                placeholder='Search movies, tv shows, and person...' 
                value={tvSearchResults}
                onChange={handleSearchTvChange}
                className='SearchBarTv__input'
            />
        </form>
        <div className='searchBarTv__right'>
            <p className='searchBarTv__userEmailText'>User Email: {user && user.email}</p>
            <button onClick={handleLogout} className='searchBarTv__button'>Logout</button>
        </div>
    </header>
  );
};

export default SearchBarTv;