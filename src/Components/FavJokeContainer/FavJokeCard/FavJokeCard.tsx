import './FavJokeCard.scss'
import React from 'react'

interface Props {
  Joke: {
    chuckJoke: string,
    icon: string,
    id: string,
  },
  isFavorited: boolean,
  handleFavoriting(userJoke: {}): void
}

const FavJokecard: React.FC<Props> = (props) => {
  return (
    <section>
      <article className='favorite'>
        <p>{props.Joke.chuckJoke}</p>
      </article>
      <img src={props.Joke.icon} alt='Chuck Icon'></img>
      <button className='star'>⭐️</button>
      <button className='star'>✩</button>
    </section>
  )
}

export default FavJokecard;