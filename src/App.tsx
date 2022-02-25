import React, { useState, useEffect } from "react";
import "./App.scss";
import { getData } from "./apiCalls";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import RandomJokeContainer from "./Components/RandomJokeContainer/RandomJokeContainer";
import {
  FavJokeContainer,
  Props,
} from "./Components/FavJokeContainer/FavJokeContainer";
import Form from "./Components/Form/Form";
import UserJokeContainer from "./Components/UserJokeContainer/UserJokeContainer";
import { Joke } from "./Components/FavJokeContainer/FavJokeCard/FavJokeCard";

// class App extends Component{
const App = () => {
  // state = {
  //   joke: {
  //     icon: '',
  //     id: '',
  //     chuckJoke: '',
  //     isFavorited: false
  //   },
  //   userJoke: {
  //     textInput: '',
  //     id: '',
  //     isFavorited: false
  //   },
  //   favorites: [],
  //   // isFavorited: false,
  // }
  const [joke, setJoke] = useState({
    icon: "",
    id: "",
    chuckJoke: "",
    isFavorited: false,
  });
  const [favorites, setFavorites] = useState<Joke[]>([{
    icon: "",
    id: "",
    chuckJoke: "",
    isFavorited: false,
  }]);
  const [userJoke, setUserJoke] = useState<Joke>({
    icon: "",
    id: "",
    chuckJoke: "",
    isFavorited: false,
  });

  // componentDidMount = (): void => {
  useEffect(() => {
    getData().then((data) =>
      setJoke({
        icon: data.icon_url,
        id: data.id,
        chuckJoke: data.value,
        isFavorited: false,
      })
    );
  }, []);
  // }

  const storeUserJoke = (joke: Joke): void => {
    console.log(joke);
    setUserJoke(joke);
  };

  const handleFavoriting = (joke: Joke) => {
    console.log(joke);
    if (!joke.isFavorited) {
      setFavorites([...favorites, joke]);
      // const addedFavorite = this.state.favorites.push(this.state.joke)
      // this.setState({...this.state, favorites: addedFavorite, isFavorited: true})
    }
  };

  // render() {
  return (
    <main className="app">
      <Header />
      <Switch>
        {/* <Route exact path='/'>
            <Redirect to='/:id'/>
          </Route> */}
        <Route exact path="/">
          <RandomJokeContainer
            joke={joke}
            handleFavoriting={handleFavoriting}
          />
        </Route>
        <Route exact path="/form">
          <Form storeUserJoke={storeUserJoke} />
        </Route>
        <Route exact path="/favorites">
          {/* <FavJokeContainer handleFavoriting={handleFavoriting}/> */}
        </Route>
        <Route exact path="/user-joke/:id">
          <UserJokeContainer joke={userJoke} />
        </Route>
      </Switch>
    </main>
  );
  // }
};

export default App;
