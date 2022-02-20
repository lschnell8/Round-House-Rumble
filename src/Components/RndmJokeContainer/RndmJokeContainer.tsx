import React from 'react';
import './RndmJokesContainer.css';

const RndmJokesContainer = ({ props }) => {
  let cards = props.joke.map(rndm =>
    <RndmJokeCard
      key={rndm.id}
      icon={rndm.icon_url}
      joke={rndm.value}
    />)
  return (
    <>
      { cards }
    </>
  )
};

export default RndmJokesContainer;