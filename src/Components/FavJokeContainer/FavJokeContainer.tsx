import React from 'react';
import './FavJokesContainer.css';

const FavJokesContainer = ({ favorites }) => {
  let cards = favorites.map(fav =>
    <FavJokeCard
      key={fav.id}
      icon={fav.icon_url}
      joke={fav.value}
    />)
  return (
    <>
      { cards }
    </>
  )
};

export default FavJokesContainer;