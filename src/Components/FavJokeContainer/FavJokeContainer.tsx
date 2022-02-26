import FavJokecard from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss';

const FavJokeContainer = (props: { favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[]; }) => {
  const cards = props.favorites.map(fav =>
    <FavJokecard
      key={fav.id}
      chuckJoke={fav.chuckJoke}
      icon={fav.icon}
      id={fav.id}
      isFavorited={fav.isFavorited}
    />)
  
  return (
    <>
      {cards}
    </>
  )
}; 

export default FavJokeContainer;
