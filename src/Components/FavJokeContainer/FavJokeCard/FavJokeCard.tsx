import './FavJokeCard.scss';
//I added the following import
//import { Joke } from '../Interfaces/interfaces'


const FavJokecard = ({ chuckJoke, icon, id, isFavorited }: { chuckJoke: string, icon: string, id: string, isFavorited: boolean }) => {
  return (
    <section className='favorite'>
      <div className='star-burst2'>
      </div>
      <article className='star-burst'>
        <p>{chuckJoke}</p>
      </article>
      <img src={icon ? icon : 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'} alt='Chuck Icon'></img>
      <button className='star card-star'>⭐️</button>
      {/* {isFavorited ? <button className='star' onclick={props.handleFavoriting}>⭐️</button> : <button className='star' onclick={props.handleFavoriting}>✩</button>} */}
    </section>
  )
}


//Attempt to add the favoriting method to the card
// const FavJokecard = ({ chuckJoke, icon, id, isFavorited, handleFavoriting }: { chuckJoke: string, icon: string, id: string, isFavorited: boolean, handleFavoriting(selectedJoke: Joke): void }) => {
//   return (
//     <section className='favorite'>
//       <div className='star-burst2'>
//       </div>
//       <article className='star-burst'>
//         <p>{chuckJoke}</p>
//       </article>
//       <img src={icon ? icon : 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'} alt='Chuck Icon'></img>
//       {/* <button className='star card-star'>⭐️</button> */}
//       {isFavorited ? <button className='star' onclick={() => handleFavoriting({ icon: icon, id: id, chuckJoke: chuckJoke, isFavorited: isFavorited })}>⭐️</button> : <button className='star' onclick={() => handleFavoriting({ icon: icon, id: id, chuckJoke: chuckJoke, isFavorited: isFavorited })}>✩</button>}
//     </section >
//   )
// }

export default FavJokecard;