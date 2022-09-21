import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import StripeButton from '../StripeButton/StripeButton';
import './TvShowCard.css';

const API_IMG='https://image.tmdb.org/t/p/w500/';

const TvShowCard = ({ poster_path, vote_average, name, first_air_date, overview  }) => {
  const [modal, setModal] = useState(false);

  const handleToggleModal = () => {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className='tvShowCard'>
        <img
            src={API_IMG+poster_path}
            alt={name}
            className='TvShowCard__image'
        />
        <div className='TvShowCard__info'>
            <p className='TvShowCard__vote'>{vote_average}</p>
            <p className='TvShowCard__title'>{name}</p>
            <p className='TvShowCard__release'>{first_air_date}</p>
            <button 
                className='TvShowCard__btn' 
                type='button' 
                onClick={handleToggleModal}>View Details</button>
        </div>
        {modal && (
        <div className='modal-tv'>
            <div onClick={handleToggleModal} className='overlay-tv'>
                <div className='modal-tv-content'>
                    <img 
                        src={API_IMG+poster_path} 
                        alt={name} 
                        className='modal-tv-img' />
                    <CloseIcon 
                        onClick={handleToggleModal} 
                        className='close-tv-modal' 
                    />
                    <h3 className='modal-tv-title'>{name}</h3>
                    <p className='modal-tv-vote'>{vote_average}</p>
                    <p className='modal-tv-release'>Release Date: {first_air_date}</p>
                    <h4 className='modal-tv-overview'>Overview</h4>
                    <p>{overview}</p>
                    <div className='modal-tv-buttons'>
                        <Link to="/TrailerSearch">
                          <button type='button' className='modal-tv-button'>See Trailer</button>
                        </Link>
                        <StripeButton />
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
  );
};

export default TvShowCard;