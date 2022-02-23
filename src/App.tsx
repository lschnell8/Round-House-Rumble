import React, { Component } from 'react';
import './App.scss';
import { getData } from './APICall';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
import Form from './Components/Form/Form';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    iconURL: '',
    id: '',
    value: ''
  }

  componentDidMount() {
    getData()
      .then(data => this.setState({ ...this.state, iconURL: data.icon_url, id: data.id, value: data.value }))
  }

  render() {
    console.log('my state value', this.state.value)
    console.log(this.props)
    return (
      <main className="app">
        <Header />
        <Route exact path="/" render={() => <RandomJokeContainer chuckJoke={this.state.value} icon={this.state.iconURL} id={this.state.id} />} />
        <Route exact path="/Form" render={() => <Form />} />
        <Route exact path="/Favorites" render={() => <FavJokeContainer />} />
      </main>
    )
  }
}

export default App;
