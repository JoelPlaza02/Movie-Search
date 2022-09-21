import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';


const SearchBar = ({ setMovies, setSearchResults, searchResults }) => {
  const navigate = useNavigate();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=dfec6e32b7f45c769731b600bb836c4d&query=${searchResults}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchChange = (e) => {
      setSearchResults(e.target.value);
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
    <header className='searchBar'>
        <form onSubmit={handleSearchSubmit} className='searchBar__form'>
          <SearchIcon onClick={handleSearchSubmit} className='searchBar__searchIcon' />
            <input 
                type='search' 
                placeholder='Search movies, tv shows, and person...' 
                value={searchResults} 
                onChange={handleSearchChange} 
                className='searchBar__input'
            />
        </form>
         <div className='searchBar__right'>
             <p className='searchBar__userEmailText'>User Email: {user && user.email}</p>
             <button onClick={handleLogout} className='searchBar__button'>Logout</button>
         </div>
    </header>
  );
};

export default SearchBar;