import './RandomJokeContainer.scss'
const RandomJokeContainer = () => {
  return (
    <section className="main-container">
      <article className='favorite'>
        <p>{props.value}</p>
      </article>
        <img src='' alt=''></img>
        <button className='star'>⭐️</button>
        <button className='star'>✩</button>
        <button className="another-joke">Hit me with another!</button>
    </section>
  )
}

export default RandomJokeContainer;