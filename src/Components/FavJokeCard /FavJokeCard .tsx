import React from 'react';
import './FavJokesCard.css';

const FavJokesCard = ({ icon_url, value }) => {
  return (
    <article>
      <img src={ icon_url } alt='Chuck Icon'>Chuck Icon</img>
      //display conditionally and toggle onclick
      <img alt='star outline'>✩</img>
      <img alt='filled star'>⭐️</img>
      <div>
        <p>{ value }</p>
      </div>
    </article>
  )
};

export default FavJokesCard;