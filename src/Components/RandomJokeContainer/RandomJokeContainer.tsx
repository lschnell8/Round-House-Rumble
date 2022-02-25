import './RandomJokeContainer.scss'
import React from 'react'

interface Props {
  joke: {
    icon: string,
    id: string,
    chuckJoke: string,
    isFavorited: boolean,
  }, 
  handleFavoriting(joke: {}): void
}

const RandomJokeContainer: React.FC<Props> = (props) => {
  return (
    <section className="main-container">
      <article className='comment'>
        {props.joke.chuckJoke && <p>{props.joke.chuckJoke}</p>}
        {!props.joke.chuckJoke && <p>Nothing found</p>}
      </article>
      <img src='http://4.bp.blogspot.com/-YLmBl9DLa6I/VXeI_k1hJbI/AAAAAAAAASY/RDVh0Z2crNE/s320/CHUCK%2BNORRIS%2521.jpg' alt='Walker Texas Ranger'></img>
      {props.joke.isFavorited ? <button className='star' onClick={() => props.handleFavoriting(props.joke)}>⭐️</button> : <button className='star' onClick={() => props.handleFavoriting(props.joke)}>✩</button>}
      <button className="another-joke">Hit me with another!</button>
    </section>
  )
};

export default RandomJokeContainer;