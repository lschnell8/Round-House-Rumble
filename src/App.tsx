import React, {Component} from 'react';
import './App.scss';
import  { getData }  from './APICall';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';

class App extends Component {
  state = {

  }

  componentDidMount() {
    getData()
    .then(data => data.value)
  }

  render () {
    return (
      <main className="app">
        <Header />
        <RandomJokeContainer />
      </main>
    )
  }
}

export default App;
