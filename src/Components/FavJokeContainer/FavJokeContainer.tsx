import FavJokeCard from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss';
import { Props } from '../Interfaces/interfaces';

const FavJokeContainer = (props: Props) => {
  const cards = props.favorites.map((fav) => {
      return (
        <>
          <FavJokeCard
            key={fav.id}
            chuckJoke={fav.chuckJoke}
            icon={fav.icon}
            id={fav.id}
            isFavorited={fav.isFavorited}
            handleFavoriting={props.handleFavoriting}
            />
        </>
      )
  })

  return (
    <section className='fav-display'>
      {cards.length ? cards : <p>You don't have any favorites yet</p>}
    </section>
  )
};

export default FavJokeContainer;
