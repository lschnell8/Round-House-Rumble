import './RandomJokeContainer.scss';
import { RandomJoke } from '../Interfaces/interfaces';
import favoriteStar from '../../assets/favoriteStar.png';
import unfavoriteStar from '../../assets/unfavoriteStar.png';

const RandomJokeContainer = (props: RandomJoke) => {
  return (
    <section className="main-container">
      <div className='comment-container'>
        <article className='comment'>
          {props.joke.chuckJoke && <p>{props.joke.chuckJoke}</p>}
          {!props.joke.chuckJoke && <p>Nothing found</p>}
        </article>
        <button className="another-joke" onClick={props.getNewJoke}>Hit me with another!</button>
      </div>
      <div className='image-container'>
        {props.joke.isFavorited ? <img className='big-star icon' onClick={() => props.handleFavoriting(props.joke)} src={favoriteStar} alt='Favorited Star'/> : 
          <img className='big-star icon' onClick={() => props.handleFavoriting(props.joke)} src={unfavoriteStar} alt='Unfavorited Star'/>}
          <img className='chuck-img' src='http://4.bp.blogspot.com/-YLmBl9DLa6I/VXeI_k1hJbI/AAAAAAAAASY/RDVh0Z2crNE/s320/CHUCK%2BNORRIS%2521.jpg' alt='Walker Texas Ranger'></img>
      </div>
    </section>
  )
};

export default RandomJokeContainer;