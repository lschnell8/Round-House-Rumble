import FavJokecard from "./FavJokeCard/FavJokeCard";
import './FavJokeContainer.scss';
import { Joke } from '../Interfaces/interfaces'

//this is what it looked like before
// const FavJokeContainer = (props: { favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[]; }) 

interface Props {
  favorites: { chuckJoke: string; icon: string; id: string; isFavorited: boolean; }[],
  handleFavoriting(selectedJoke: Joke): void,
}

const FavJokeContainer = (props: Props) => {
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
        //I added the line below so I could pass the favoriting function to the cards as a prop
        //handleFavoriting={props.handleFavoriting}
        />
      )
    }
  })

  return (
    <>
      {/* {console.log("card length", cards.length)} */}
      {cards.length > 1 ? cards : <p>You don't have any favorites yet</p>}
    </>
  )
};

export default FavJokeContainer;
