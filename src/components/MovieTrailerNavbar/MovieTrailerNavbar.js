import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import './MovieTrailerNavbar.css';


const MovieTrailerNavbar = () => {
  const navigate = useNavigate();

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
    <nav className='movieTrailerNavbar'>
      <Link to="/HomePage" style={{textDecoration: 'none', color: '#fff'}}>
        <header className='movieTrailerNavbar__header'>
            <h4>Movie Search🍿</h4>
        </header>
      </Link>
      <div className='movieTrailerNavbar__right'>
          <p className='movieTrailerNavbar__userEmailText'>User Email: {user && user.email}</p>
          <button onClick={handleLogout} className='movieTrailerNavbar__button'>Logout</button>
      </div>
    </nav>
  );
};

export default MovieTrailerNavbar;