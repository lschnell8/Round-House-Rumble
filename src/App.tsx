import { useState, useEffect } from "react";
import "./App.scss";
import { getData } from "./apiCalls";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import RandomJokeContainer from "./Components/RandomJokeContainer/RandomJokeContainer";
import FavJokeContainer from "./Components/FavJokeContainer/FavJokeContainer";
import Form from "./Components/Form/Form";
import UserJokeContainer from "./Components/UserJokeContainer/UserJokeContainer";
import { Joke } from "./Components/Interfaces/interfaces";

const App = () => {

  const [joke, setJoke] = useState({
    icon: "",
    id: "",
    chuckJoke: "",
    isFavorited: false,
  });

  const [favorites, setFavorites] = useState([{
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

  const storeUserJoke = (joke: Joke): void => {
    console.log(joke);
    setUserJoke(joke);
  };

  const handleFavoriting = (selectedJoke: { chuckJoke: string, icon: string, id: string, isFavorited: boolean }) => {
    //The old if statement looked like this: if (!joke.isFavorited)
    //But the problem is that it was only evaluating the home page joke's isFavorited property, so if we had already favorited the homepage joke then the if statement would always evaluate to false and we wouldn't be able to add the user joke to the favorites array
    if (!favorites.includes(selectedJoke)) {
      setFavorites([...favorites, selectedJoke]);
      if (selectedJoke === joke) {
        setJoke({ ...joke, isFavorited: true })
      } else {
        setUserJoke({ ...userJoke, isFavorited: true })
      }
    }
  };

  return (
    <>
      {console.log('joke.isFavorited', joke.isFavorited)}
      {console.log('userJoke.isFavorited', userJoke.isFavorited)}
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
            <FavJokeContainer favorites={favorites} />
          </Route>
          <Route exact path="/user-joke/:id">
            <UserJokeContainer joke={userJoke} handleFavoriting={handleFavoriting} />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
