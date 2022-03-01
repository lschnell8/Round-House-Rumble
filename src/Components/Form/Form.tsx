import './Form.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Joke } from '../Interfaces/interfaces';

const Form = (props: { storeUserJoke: (joke: Joke) => void; }) => {
  const [joke, setJoke] = useState({ icon: '', id: Date.now().toString(), chuckJoke: '', isFavorited: false });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setJoke((joke => ({
      ...joke,
      chuckJoke: event.target.value,
    })))
  }

  const submitUserJoke = (joke: Joke): void => {
    props.storeUserJoke(joke)
  }

  return (
    <>
      <form className='form'>
        <label>Chuck One Liner:</label>
        <textarea className='input' value={joke.chuckJoke} onChange={event => handleChange(event)}></textarea>
        <Link to='/user-joke'>
          <button onClick={() => submitUserJoke(joke)}>Make Ya Own</button>
        </Link>
      </form>
    </>
  )
};

export default Form;