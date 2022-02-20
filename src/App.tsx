import React, {Component} from 'react';
import './App.css';
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
      <div className="App">
        <Header />
        <RandomJokeContainer />
      </div>
    )
  }
}

export default App;
