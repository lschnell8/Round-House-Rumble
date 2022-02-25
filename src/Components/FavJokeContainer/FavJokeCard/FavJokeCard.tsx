import './FavJokeCard.scss'
import React from 'react'

export interface Joke {
  icon?: string,
  id: string,
  chuckJoke?: string,
  isFavorited: boolean
}

export interface UserJoke {
  textInput?: string,
  id: string,
  isFavorited: boolean
}

interface Props {
  joke: Joke,
  userJoke: UserJoke,
  favorites: []
  handleFavoriting(userJoke: {}): void
}
 

const FavJokecard: React.FC<Props> = (props) => {
  return (
    <section>
      <article className='favorite'>
        <p>{props.joke.chuckJoke}</p>
      </article>
      <img src={props.joke.icon} alt='Chuck Icon'></img>
      <button className='star'>⭐️</button>
      {/* {props.Joke.isFavorited || props.userJoke.isFavorited ? <button className='star' onclick={props.handleFavoriting}>⭐️</button> : <button className='star' onclick={props.handleFavoriting}>✩</button>}       */}
    </section>
  )
}

export default FavJokecard;