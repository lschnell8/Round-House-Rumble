import React, { Component } from 'react';
import './App.scss';
import { getData } from './APICall';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';
import FavJokeContainer from './Components/FavJokeContainer/FavJokeContainer';
import Form from './Components/Form/Form';
// import UserJokeContainer from './Components/UserJokeContainer/UserJokeContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

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
        <Switch>
          {/* <Route exact path='/'>
            <Redirect to='/:id' />
          </Route> */}
          <Route exact path='/'>
            <RandomJokeContainer chuckJoke={this.state.value} icon={this.state.iconURL} id={this.state.id} />
          </Route>
          <Route exact path='/form'>
            <Form />
          </Route>
          <Route exact path='/favorites'>
            <FavJokeContainer />
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
