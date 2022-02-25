import './UserJokeContainer.scss';
import React from 'react';
import { Joke } from '../Interfaces/interfaces'

const UserJokeContainer = ({joke}: {joke: Joke}) => {
  return (
    <section className="main-container">
      <article className='comment'>
        <p>{joke.chuckJoke}</p>
      </article>
      <img src='http://4.bp.blogspot.com/-YLmBl9DLa6I/VXeI_k1hJbI/AAAAAAAAASY/RDVh0Z2crNE/s320/CHUCK%2BNORRIS%2521.jpg' alt='Walker Texas Ranger'></img>
      {/* <button className='star'>⭐️</button> */}
      <button className='star'>✩</button>
    </section >
  )
}

export default UserJokeContainer;