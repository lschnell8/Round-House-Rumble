import './FavJokeCard.scss';

const FavJokecard = ({chuckJoke, icon, id, isFavorited} : {chuckJoke: string, icon: string, id: string, isFavorited: boolean}) => {
  return (
    <section>
      <article className='favorite'>
        <p>{chuckJoke}</p>
      </article>
      <img src={icon ? icon : 'https://assets.chucknorris.host/img/avatar/chuck-norris.png' } alt='Chuck Icon'></img>
      <button className='star'>⭐️</button>
      {/* {isFavorited ? <button className='star' onclick={props.handleFavoriting}>⭐️</button> : <button className='star' onclick={props.handleFavoriting}>✩</button>}       */}
    </section>
  )
}

export default FavJokecard;