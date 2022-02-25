import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import UserJokeContainer from '../UserJokeContainer/UserJokeContainer'
import { Joke } from '../Interfaces/interfaces';

// class Form extends Component<Store> {
//   state = {
//     textInput: '',
//     id: Date.now().toString(),
//   }
const Form = (props: { storeUserJoke: (joke: Joke) => void; }) => {
  const [joke, setJoke] = useState({ icon: '', id: '', chuckJoke: '', isFavorited: false });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    console.log("before", event.target.value)
    setJoke((joke => ({
      ...joke,
      chuckJoke: event.target.value
    })))
    console.log("after", joke.chuckJoke)
  };
 

  // useEffect(() => {

  // }, [handleChange])

  // handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
  // setJoke({ icon: '', id: '', chuckJoke: '', isFavorited: false })
  // }

  const submitUserJoke = (joke: Joke): void => {
    props.storeUserJoke(joke)
    // throw new Error("Function not implemented.");
  }

  // render() {
    return (
      <>
        <form>
          <label>Chuck One Liner:</label>
          <textarea value={joke.chuckJoke} onChange={event => handleChange(event)}></textarea>
          <Link to='/user-joke/:id'>
            <button onClick={() => submitUserJoke(joke)}>Make Ya Own</button>
          </Link>
        </form>
        {/* <Route exact path='/user-joke/:id'>
          <UserJokeContainer textInput={this.state.input} />
        </Route> */}
      </>
    )
  // }
};

export default Form;