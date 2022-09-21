import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import StripeButton from '../StripeButton/StripeButton';
import './MoviePopularCard.css';

const API_IMG ='https://image.tmdb.org/t/p/w500/';

const MoviePopularCard = ({ poster_path, title, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);
 
  const handleToggle = () => {
    setShow(!show);
  }

  if (show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const totalPrice = 30;

  return (

    <div className='moviePopularCard'>
        <img 
            src={API_IMG+poster_path} 
            alt={title}
            className='moviePopularCard__image'
        />
        <div className='moviePopularCard__info'>
            <p className='moviePopularCard__vote'>{vote_average}</p>
            <p className='moviePopularCard__title'>{title}</p>
            <p className='moviePopularCard__release'>{release_date}</p>
            <button 
                className='moviePopularCard__btn' 
                type='button' 
                onClick={handleToggle}>View Details</button>
        </div>
        {show && (
        <div className='modal'>
            <div onClick={handleToggle} className='overlay'>
              <div className='modal-content'>
                <img 
                    src={API_IMG+poster_path} 
                    alt={title} 
                    className='modal-img' 
                />
                <CloseIcon 
                    onClick={handleToggle} 
                    className='close-modal' 
                />
                <h3 className='modal-title'>{title}</h3>
                <p className='modal-vote'>{vote_average}</p>
                <p className='modal-release'>Release Date: {release_date}</p>
                <h4 className='modal-overview'>Overview</h4>
                <p>{overview}</p>
                <div className='modal-buttons'>
                  <Link to="/TrailerSearch">
                      <button type='button' className='modal-button'>See Trailer</button>
                  </Link>
                  <StripeButton price={totalPrice} />
                </div>
              </div>
            </div>
        </div>
        )}
    </div>
  );
};

export default MoviePopularCard;