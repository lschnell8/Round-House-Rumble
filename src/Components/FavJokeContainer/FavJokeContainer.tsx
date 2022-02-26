import FavJokecard from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss';

const FavJokeContainer = (props: { favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[]; }) => {
  console.log('favorites', props.favorites)
  const cards = props.favorites.map((fav, index) => {
    if (index > 0) {
      return (
        <FavJokecard
          key={fav.id}
          chuckJoke={fav.chuckJoke}
          icon={fav.icon}
          id={fav.id}
          isFavorited={fav.isFavorited}
        />
      )
    }
  })

  return (
    <>
      {console.log("card length", cards.length)}
      {cards.length > 1 ? cards : <p>You don't have any favorites yet</p>}
    </>
  )
};

export default FavJokeContainer;
