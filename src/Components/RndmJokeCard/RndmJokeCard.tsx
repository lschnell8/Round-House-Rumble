import React from 'react';
import './FavJokesCard.css';

const FavJokesCard = ({ value }) => {
  return (
    <article>
      <img src='' alt='Chuck Image'>Chuck Image</img>
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