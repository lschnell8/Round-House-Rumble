import './UserJokeContainer.scss';
import React from 'react';
import { Joke, RandomJoke } from '../Interfaces/interfaces'

const UserJokeContainer = (props: RandomJoke) => {
  return (
    <section className="main-container">
      <article className='comment'>
        <p>{props.joke.chuckJoke}</p>
      </article>
      <img src='http://4.bp.blogspot.com/-YLmBl9DLa6I/VXeI_k1hJbI/AAAAAAAAASY/RDVh0Z2crNE/s320/CHUCK%2BNORRIS%2521.jpg' alt='Walker Texas Ranger'></img>
      {props.joke.isFavorited ? <button className='star' onClick={() => props.handleFavoriting(props.joke)}>⭐️</button> : <button className='star' onClick={() => props.handleFavoriting(props.joke)}>✩</button>}
    </section >
  )
}

export default UserJokeContainer;

// { joke }: { joke: Joke },