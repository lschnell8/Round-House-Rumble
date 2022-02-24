import React, { Component } from 'react';
import './App.scss';
import { getData } from './APICall';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
import Form from './Components/Form/Form';
import UserJokeContainer from './Components/UserJokeContainer/UserJokeContainer';
import { Route, Switch} from 'react-router-dom';

class App extends Component {
  state = {
    iconURL: '',
    id: '',
    value: '',
    userJoke: {
      textInput: '',
      id: '',
    }
  }

  componentDidMount = () => {
    getData()
      .then(data => this.setState({ ...this.state, iconURL: data.icon_url, id: data.id, value: data.value }))
      .then(() => console.log('compDidMnt', this.state))
  }

  storeUserJoke = (userJoke: {}): void => {
    console.log('state', this.state)
    console.log('userJOke', userJoke)
    this.setState({ ...this.state, userJoke: userJoke })
  }

  render() {
    return (
      <main className="app">
        <Header />
        <Switch>
          {/* <Route exact path='/'>
            <Redirect to='/:id' />
          </Route> */}
          <Route exact path='/'>
            <RandomJokeContainer chuckJoke={this.state.value} icon={this.state.iconURL} id={this.state.id} />
          </Route>
          <Route exact path='/form'>
            <Form storeUserJoke={this.storeUserJoke} />
          </Route>
          <Route exact path='/favorites'>
            <FavJokeContainer />
          </Route>
          <Route exact path='/user-joke/:id'>
            <UserJokeContainer textInput={this.state.userJoke.textInput} />
          </Route>
        </Switch>
      </main>
    )
  }
}

export default App;
