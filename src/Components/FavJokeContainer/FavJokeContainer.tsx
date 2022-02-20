import FavJokecard from "./FavJokeCard/FavJokeCard";

const FavJokeContainer = () => {
  const cards = props.favorites.map(fav =>
    <FavJokecard
      key={fav.id}
      value={fav.value}
      icon={fav.icon_url}
    />)
  
  return (
    <>
    {cards}
    </>
  )
} 

export default FavJokeContainer;