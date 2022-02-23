import React, {Component} from 'react';
import './App.scss';
import { getData } from './apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
// import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
// import Form from './Components/Form/Form';



class App extends Component{
  state = {
    iconURL: '',
    id: '',
    value: '',
    favorites: [],
    isFavorited: false
  }

  componentDidMount = () => {
    getData()
      .then(data => {
        this.setState({ iconURL: data.icon_url, id: data.id, value: data.value })
        console.log(this.state)
      })
  }

  // handleFavoriting = () => {
  //   if (!this.state.isFavorited) {
  //     const addedFavorite = this.state.favorites.push(currentJoke)
  //     this.setState({...this.state, favorites: addedFavorite, isFavorited: true})
  //   }

  // }

  render () {
    return (
      <main className="app">
        <Header />
        <Switch>
          {/* <Route exact path='/'>
            <Redirect to='/:id'/>
          </Route> */}
          <Route exact path='/'>
            <RandomJokeContainer chuckJoke={this.state.value} icon={this.state.iconURL} id={this.state.id}/>
          </Route>
          <Route exact path='/form'>
            {/* <Form /> */}
          </Route>
          <Route exact path='/favorites'>
            {/* <FavJokeContainer /> */}
          </Route>
          <Route exact path='/user-joke/:id'>
            {/* <UserJokeContainer /> */}
          </Route>
        </Switch>
      </main>
    )
  }
}


export default App;
