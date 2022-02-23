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

  componentDidMount() {
    getData()
      .then(data => {
        this.setState({ iconURL: data.icon_url, id: data.id, value: data.value })
        console.log(this.state)
      })
  }

  // handleFavoriting() {
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
          <Route exact path='/'>
            <Redirect to='/:id'/>
          </Route>
          <Route exact path='/:id'>
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
  
// interface State {
//   joke: RandomJoke[];
// }
  
// class App extends Component { 
//   state: State = {
//     joke: []
//   };
  
//   componentDidMount = () => {
//     getData()
//     // .then((response) => response.json())
//     .then((data) => {
//       this.setState({ joke: data })
//       console.log('this.state >>>>', this.state)
//     })
//     // .catch(error => console.log(error))
//   }
  
//   render() {
    
//     const jokeValue = this.state.joke[0].value;
//     // const jokeIcon = this.state.joke[0].icon_url;

//     // console.log(jokeIcon)
//     console.log('jokeValue >>>>', jokeValue)
//     // console.log('jokeIcon >>>>' jokeIcon)

//     return (
//       <main className="App">
//         {jokeValue}
//         {/* <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt='joke icon'/> */}
//       </main>
//     ) 
//   }
// };

export default App;
