import React, { Component } from "react"
import { Link, Route } from 'react-router-dom'
import UserJokeContainer from '../UserJokeContainer/UserJokeContainer'

interface Props {
  storeUserJoke(userJoke: {}): void
}

class Form extends Component<Props> {
  state = {
    textInput: '',
    id: Date.now().toString(),
  }



  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ textInput: event.target.value })
  }

  submitUserJoke = (state: { textInput: string; id: string }): void => {
    this.props.storeUserJoke(this.state)
  }

  render() {
    return (
      <>
        <form>
          <label>Chuck One Liner:</label>
          <textarea value={this.state.textInput} onChange={(event) => this.handleChange(event)}></textarea>
          <Link to='/user-joke/:id'>
            <button onClick={() => this.submitUserJoke(this.state)}>Make Ya Own</button>
          </Link>
        </form>
        {/* <Route exact path='/user-joke/:id'>
          <UserJokeContainer textInput={this.state.input} />
        </Route> */}
      </>
    )
  }
};

export default Form;