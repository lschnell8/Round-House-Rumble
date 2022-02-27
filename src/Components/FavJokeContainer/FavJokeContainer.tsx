import FavJokeCard from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss';
import { Props } from '../Interfaces/interfaces';


//this is what it looked like before
// const FavJokeContainer = (props: { favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[]; }) 

// interface Props {
//   favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[],
//   handleFavoriting(selectedJoke: Joke): void,
// }

const FavJokeContainer = (props: Props) => {
  console.log('FAVJOKECONTAINER favorites', props.favorites)
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
    <>
      {console.log("favJokeContainer, favoritesArray Display", cards)}
      {cards.length ? cards : <p>You don't have any favorites yet</p>}
    </>
  )
};

export default FavJokeContainer;
