import React, {Component} from 'react';
import './App.scss';
import  { getData }  from './APICall';
import Header from './Components/Header/Header'
import RandomJokeContainer from './Components/RandomJokeContainer/RandomJokeContainer';


class App extends Component {
  state = {
    iconURL: '',
    id: '',
    value: ''
  }

  componentDidMount() {
    getData()
    .then(data => this.setState({iconURL: data.icon_url, id: data.id, value: data.value}))
  }

  render () {
    console.log('my state value', this.state.value)
    return (
      <main className="app">
        <Header />
        <RandomJokeContainer chuckJoke={this.state.value} icon={this.state.iconURL} id={this.state.id}/>
      </main>
    )
  }
}

export default App;
