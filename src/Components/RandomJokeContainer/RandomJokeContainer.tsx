import './RandomJokeContainer.scss'
import React from 'react'
interface Prop {
  chuckJoke: string,
  icon: string,
  id: string,
}

const RandomJokeContainer: React.FC<Prop>  = (prop) => {
  console.log('passed prop', prop)
  return (
    <section className="main-container">
      <article className='favorite'>
       {prop.chuckJoke && <p>{prop.chuckJoke}</p> }
       {!prop.chuckJoke && <p>Nothing found</p>}
      </article>
        <img src={prop.icon} alt=''></img>
        <button className='star'>⭐️</button>
        <button className='star'>✩</button>
        <button className="another-joke">Hit me with another!</button>
    </section>
  )
}

export default RandomJokeContainer;