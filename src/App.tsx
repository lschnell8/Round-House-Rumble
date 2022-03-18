import { useState, useEffect } from 'react';
import './App.scss';
import { getData } from './apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
import Form from './Components/Form/Form';
import UserJokeContainer from './Components/UserJokeContainer/UserJokeContainer';
import { Joke } from './Components/Interfaces/interfaces';

const App = () => {

  const [joke, setJoke] = useState({
    icon: '',
    id: '',
    chuckJoke: '',
    isFavorited: false,
  });

  const [favorites, setFavorites] = useState<Joke[]>([]);

  const [userJoke, setUserJoke] = useState<Joke>({
    icon: '',
    id: '',
    chuckJoke: '',
    isFavorited: false,
  });

  useEffect(() => {
    getData()
    .then((data) =>
      setJoke({
        icon: data.icon_url,
        id: data.id,
        chuckJoke: data.value,
        isFavorited: false,
      })
    );
  }, []);

  const getNewJoke = () => {
    getData()
    .then((data) =>
      setJoke({
        icon: data.icon_url,
        id: data.id,
        chuckJoke: data.value,
        isFavorited: false,
      })
    );
  };

  const storeUserJoke = (joke: Joke): void => {
    setUserJoke(joke);
  };

  const handleFavoriting = (selectedJoke: { chuckJoke: string, icon: string, id: string, isFavorited: boolean }) => {
    if (selectedJoke.id === joke.id) {
      let tempJoke = joke;
      if (!selectedJoke.isFavorited) {
        tempJoke.isFavorited = true
        setJoke(tempJoke);
        setFavorites([...favorites, tempJoke]);
      } else if (selectedJoke.isFavorited) {
        tempJoke = selectedJoke;
        tempJoke.isFavorited = false;
        setJoke(tempJoke)
        const filteredFavorites = favorites.filter(fav => {
          return fav.id !== tempJoke.id
        })
        setFavorites(filteredFavorites)
      }
      return favorites
    } else {
      let tempJoke = userJoke;
      if (!selectedJoke.isFavorited) {
        tempJoke.isFavorited = true
        setUserJoke(tempJoke)
        setFavorites([...favorites, tempJoke]);
      } else if (selectedJoke.isFavorited) {
        tempJoke = selectedJoke
        tempJoke.isFavorited = false;
        setUserJoke(tempJoke)
        const filteredFavorites = favorites.filter(fav => {
          return fav.id !== selectedJoke.id
        })
        setFavorites(filteredFavorites)
      }
      return favorites
    }
  };

  return (
    <main className='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <RandomJokeContainer
            joke={ joke }
            handleFavoriting={ handleFavoriting }
            getNewJoke={ getNewJoke }
          />
        </Route>
        <Route exact path='/form'>
          <Form storeUserJoke={ storeUserJoke } />
        </Route>
        <Route exact path='/favorites'>
          <FavJokeContainer
            favorites={ favorites }
            handleFavoriting={ handleFavoriting }
          />
        </Route>
        <Route exact path='/user-joke'>
          <UserJokeContainer
            joke={ userJoke }
            handleFavoriting={ handleFavoriting }
            getNewJoke={ getNewJoke }
          />
        </Route>
      </Switch>
    </main>
  )
};

export default App;
