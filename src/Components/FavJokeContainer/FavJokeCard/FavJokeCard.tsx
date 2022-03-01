import './FavJokeCard.scss';
import { Joke } from '../../Interfaces/interfaces';
import favoriteStar from '../../../assets/favoriteStar.png';
import unfavoriteStar from '../../../assets/unfavoriteStar.png';


const FavJokeCard = ({ chuckJoke, icon, id, isFavorited, handleFavoriting }: { chuckJoke: string, icon: string, id: string, isFavorited: boolean, handleFavoriting(selectedJoke: Joke): void }) => {
  return (
    <section className='favorite'>
      <div className='top'>
        <img src={icon ? icon : 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'} alt='Chuck Icon'></img>
        {isFavorited ? <img className='little-star icon' onClick={() => handleFavoriting({ icon: icon, id: id, chuckJoke: chuckJoke, isFavorited: isFavorited })} src={favoriteStar} alt='Favorited Star' /> :
          <img className='little-star icon' onClick={() => handleFavoriting({ icon: icon, id: id, chuckJoke: chuckJoke, isFavorited: isFavorited })} src={unfavoriteStar} alt='Unfavorited Star' />}
      </div>
        <p className='fav-text'>{chuckJoke}</p>
      <article className='star-burst'>
      </article>
      <div className='star-burst2'>
      </div>
    </section>
  )
};

export default FavJokeCard;