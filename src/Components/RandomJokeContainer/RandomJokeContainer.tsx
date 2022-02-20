import './RandomJokeContainer.css'
const RandomJokeContainer = () => {
  return (
    <div className="main-container">
      <h1>Main container</h1>
      <div className='favorite'>
      <button className='star'>star</button>
      <button className="another-joke">Hit me with another!</button>
      </div>


    </div>
  )
}

export default RandomJokeContainer;