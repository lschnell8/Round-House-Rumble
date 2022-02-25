import FavJokecard, { Joke, UserJoke } from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss'

interface Props {
  favorites: (Joke | UserJoke)[];
}
// const FavJokeContainer = () => {

// }
const FavJokeContainer: React.FC<Props> = (props) => {
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

export default FavJokeContainer;
