import React from "react";
const FavJokecard = () => {
  return (
    <section>
      <article className='favorite'>
        {/* <p>{props.value}</p> */}
        <p>Favorite Joke!</p>
      </article>
      {/* <img src={props.icon_url} alt=''></img> */}
      <p>Icon goes here!</p>
      <button className='star'>⭐️</button>
      <button className='star'>✩</button>
    </section>
  )
}

export default FavJokecard;