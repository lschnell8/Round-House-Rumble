import './RandomJokeContainer.scss'
import React from 'react'

interface Prop {
  chuckJoke: string,
  icon: string,
  id: string,
}

const RandomJokeContainer: React.FC<Prop> = (prop) => {
  return (
    <section className="main-container">
      <article className='comment'>
        {prop.chuckJoke && <p>{prop.chuckJoke}</p>}
        {!prop.chuckJoke && <p>Nothing found</p>}
      </article>
      <img src='http://4.bp.blogspot.com/-YLmBl9DLa6I/VXeI_k1hJbI/AAAAAAAAASY/RDVh0Z2crNE/s320/CHUCK%2BNORRIS%2521.jpg' alt='Walker Texas Ranger'></img>
      {/* <button className='star'>⭐️</button> */}
      <button className='star'>✩</button>
      <button className="another-joke">Hit me with another!</button>
    </section>
  )
};

export default RandomJokeContainer;