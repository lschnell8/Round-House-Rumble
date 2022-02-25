import React, {Component} from 'react';
import './App.scss';
import { getData } from './apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
// import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
import Form from './Components/Form/Form';
import UserJokeContainer from './Components/UserJokeContainer/UserJokeContainer';

class App extends Component{
  state = {
    joke: {
      icon: '',
      id: '',
      chuckJoke: '',
      isFavorited: false
    },
    userJoke: {
      textInput: '',
      id: '',
      isFavorited: false
    },
    favorites: [],
    // isFavorited: false,
  }

  componentDidMount = (): void => {
    getData()
      .then(data => this.setState({ joke: { icon: data.icon_url, id: data.id, chuckJoke: data.value } }))
  } 
  
  storeUserJoke = (userJoke: {}): void => {
    this.setState({ ...this.state, userJoke: userJoke })
  }

  handleFavoriting = (): void => {
    if (!this.state.joke.isFavorited) {
      this.setState({ favorites: [...this.state.favorites, this.state.joke] })
      // const addedFavorite = this.state.favorites.push(this.state.joke)
      // this.setState({...this.state, favorites: addedFavorite, isFavorited: true})
    }
  }

  render() {
    console.log('render', this.state)
    return (
      <main className="app">
        <Header />
        <Switch>
          {/* <Route exact path='/'>
            <Redirect to='/:id'/>
          </Route> */}
          <Route exact path='/'>
            <RandomJokeContainer joke={this.state.joke} handleFavoriting={ this.handleFavoriting}/>
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