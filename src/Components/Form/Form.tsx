import React, { Component } from "react"
import { Link, Route } from 'react-router-dom'
import UserJokeContainer from '../UserJokeContainer/UserJokeContainer'
class Form extends Component {
  state = {
    input: ''
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <>
        <form>
          <label>Chuck One Liner:</label>
          <textarea value={this.state.input} onChange={(event) => this.handleChange(event)}></textarea>
          <Link to='/user-joke/:id'>
            <button>Make Ya Own</button>
          </Link>
        </form>
        {/* <Route exact path='/user-joke/:id'>
          <UserJokeContainer textInput={this.state.input} />
        </Route> */}
      </>
    )
  }
}


export default Form