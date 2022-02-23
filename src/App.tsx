import React, {Component} from 'react';
import './App.scss';
import { getData } from './apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
import Form from './Components/Form/Form';
import UserJokeContainer from './Components/UserJokeContainer/UserJokeContainer';

class App extends Component{
  state = {
    Joke: {
      iconURL: '',
      id: '',
      value: ''
    },
    userJoke: {
      textInput: '',
      id: '',
    },
    favorites: [],
    isFavorited: false,
  }

  componentDidMount = (): void => {
    getData()
      .then(data => this.setState({ Joke: { iconURL: data.icon_url, id: data.id, value: data.value } }))
      .then(() => console.log('compDidMnt', this.state))
  } 
  
  storeUserJoke = (userJoke: {}): void => {
    // console.log('state', this.state)
    // console.log('userJOke', userJoke)
    this.setState({ ...this.state, userJoke: userJoke })
  }

  handleFavoriting = () => {
    if (!this.state.isFavorited) {
      const addedFavorite = this.state.favorites.push()
      this.setState({...this.state, favorites: addedFavorite, isFavorited: true})
    }
  }

  render () {
    return (
      <main className="app">
        <Header />
        <Switch>
          {/* <Route exact path='/'>
            <Redirect to='/:id'/>
          </Route> */}
          <Route exact path='/'>
            <RandomJokeContainer chuckJoke={this.state.Joke.value} icon={this.state.Joke.iconURL} id={this.state.Joke.id}/>
          </Route>
          <Route exact path='/form'>
            <Form storeUserJoke={this.storeUserJoke} />
          </Route>
          <Route exact path='/favorites'>
            {/* <FavJokeContainer handleFavoriting={this.handleFavoriting}/> */}
          </Route>
          <Route exact path='/user-joke/:id'>
            <UserJokeContainer textInput={this.state.userJoke.textInput} />
          </Route>
        </Switch>
      </main>
    )
  }
};

export default App;