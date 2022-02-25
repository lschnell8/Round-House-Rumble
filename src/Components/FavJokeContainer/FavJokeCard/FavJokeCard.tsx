import './FavJokeCard.scss'
import React from 'react'

export interface Joke {
  icon?: string;
  id: string;
  chuckJoke: string;
  isFavorited: boolean
}

// export interface UserJoke {
//   textInput?: string,
//   id: string,
//   isFavorited: boolean
// }

interface Props {
  joke: Joke;
  userJoke: Joke;
  favorites: Joke[];
  handleFavoriting(joke: Joke): void
}
 

const FavJokecard = ({chuckJoke, icon, id} : {chuckJoke: string, icon?: string, id: string}) => {
  return (
    <section>
      <article className='favorite'>
        <p>{chuckJoke}</p>
      </article>
      <img src={icon} alt='Chuck Icon'></img>
      <button className='star'>⭐️</button>
      {/* {props.Joke.isFavorited || props.userJoke.isFavorited ? <button className='star' onclick={props.handleFavoriting}>⭐️</button> : <button className='star' onclick={props.handleFavoriting}>✩</button>}       */}
    </section>
  )
}

export default FavJokecard;