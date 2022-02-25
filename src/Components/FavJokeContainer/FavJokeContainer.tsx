import FavJokecard, { Joke } from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss'

export interface Props {
  favorites: Joke[];
}

// declare namespace JSX {
//   interface IntrinsicElements {
//     joke: Joke;
  
//   }
// }
// const FavJokeContainer = () => {

// }
export const FavJokeContainer = (props: {favorites: Joke[]}) => {
  const cards = props.favorites.map(fav =>
    <FavJokecard
      key={fav.id}
      chuckJoke={fav.chuckJoke}
      icon={fav.icon}
      id={fav.id}
    />)
  
  return (
    <>
    {cards}
    </>
  )
} 
